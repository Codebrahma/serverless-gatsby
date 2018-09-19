/**
 * Naming conventions:
 * Pattern: `Product => Object => Action`
 * Format: `productName:objectName_actionName`
 * Casing: `camelCase:camelCase_camelCase`

 examples:
  - `site:newsletter_subscribed`
  - `registry:function_uploaded`
  - `platform:frameworkIntegration_disabled`
*/

const isProduction = process.env.NODE_ENV === 'production'

export default function track(eventName, payload) {
  /* if (offline) {
    // buffer analytics to indexDB
  } */
  // Handle Google Analytics
  googleAnalytics(eventName, payload)
  // Handle Customer.io
  customerIO(eventName, payload)
}

function customerIO(eventName, payload) {
  if (typeof _cio !== 'undefined') {
    console.log('Customer.io Event triggered') // eslint-disable-line
    const debugCustomerIO = `Customer.io Event > [${eventName}] [payload: ${JSON.stringify(payload, null, 2)}]`
    if (!isProduction) {
      console.log(debugCustomerIO) // eslint-disable-line
      return false
    }
    console.log(`Prod>` + debugCustomerIO) // eslint-disable-line
    _cio.track(eventName, payload) // eslint-disable-line
  }
}

function googleAnalytics(eventName, payload) {
  console.log('TRIGGER GA')
  if (typeof ga !== 'undefined') {
    const objectName = eventName.match(/:(.*)_/)
    let parsedEventName
    if (objectName && objectName[1]) {
      parsedEventName = objectName[1]
    } else {
      console.warn(`Incorrect Event format: ${eventName}`)
    }
    const category = (payload && payload.category) ? payload.category : parsedEventName
    const label = (payload && payload.label) ? payload.label : undefined
    const value = (payload && payload.value) ? payload.value : undefined
    const nonInteraction = (payload && payload.nonInteraction) ? payload.nonInteraction : undefined
    let debugGA = `GA Event > [Category: ${category}] [Action: ${eventName}]`

    if (typeof label !== 'undefined') {
      debugGA += ` [Label: ${label}]`
    }

    if (typeof value !== 'undefined') {
      debugGA += ` [Value: ${value}]`
    }

    if (typeof nonInteraction !== 'undefined') {
      debugGA += ` [nonInteraction: ${nonInteraction}]`
    }
    if (!isProduction) {
      // exit early
      console.log(debugGA) // eslint-disable-line
      return false
    }
    // productName:objectName_actionName
    console.log(`GA Prod>` + debugGA) // eslint-disable-line
    ga('send', { // eslint-disable-line
      // 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'
      hitType: 'event',
      //
      eventCategory: category,
      // what did the user just do? Click a button? Submit a form?
      eventAction: eventName,
      // what form is this? If this is part of an A/B test, what variation?
      eventLabel: label,
      //  how much is this action worth?
      eventValue: value
    }, nonInteraction)
  }
}
