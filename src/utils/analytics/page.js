/* eslint-disable no-console */
import ReactGA from 'react-ga'
import removeUTM from './source/removeUTM'
const isProduction = process.env.NODE_ENV === 'production'
const branch = process.env.GATSBY_BRANCH || 'master'
let singlePageAppLoaded = false

// called in /src/fragments/GlobalScripts/GoogleAnalytics.js
export default function page(opts) {
  if (typeof window === 'undefined') {
    return false
  }
  // loading screen exit early
  if (window.location.href.indexOf(`${window.location.origin}/loading`) > -1) {
    return false
  }

  const pageData = getPageData(opts)
  // Trigger google analytics page view
  gaPageView(pageData)

  // place analytics page tracking that auto tracks the first page view below
  if (singlePageAppLoaded) {
    // Trigger customer.io page view
    customerIOPageView(pageData)
    // Trigger hubspot page view
    hubspotPageView(pageData)
  }

  singlePageAppLoaded = true
}

/* Analytics Providers Specific Page view calls */
export function gaPageView(pageData) {
  const data = pageData || getPageData()
  if (!isProduction) {
    console.info(`DEV: GA Pageview > ${window.location.href}`)
    setTimeout(removeUTM, 0)
  }
  if (typeof ga !== 'undefined') {
    // console.info(`GA Pageview > ${window.location.href}`)
    ga('set', 'page', data.path) // eslint-disable-line
    /* dimension1: branch  --  See in "Custom Definitions" of serverless.com property " */
    // console.info('ga branch:', data.branch)
    ga('set', 'dimension1', data.branch) // eslint-disable-line no-undef
    ga('send', 'pageview', { hitCallback: removeUTM }) // eslint-disable-line
  }
}

export function customerIOPageView(pageData) {
  const data = pageData || getPageData()
  if (!isProduction) {
    return console.info(`DEV: Customer.io Pageview > ${window.location.href}`)
  }
  if (typeof _cio !== 'undefined') {
    // console.info(`Customer.io Pageview > ${window.location.href}`)
    _cio.page(document.location.href, data) // eslint-disable-line
  }
}

export function hubspotPageView(pageData) {
  if (!isProduction) {
    return console.info(`DEV: Hubspot Pageview > ${window.location.href}`)
  }
  if (typeof _hsq !== 'undefined') {
    // console.info(`Hubspot Pageview > ${window.location.href}`)
    _hsq.push(['trackPageView']) // eslint-disable-line
  }
}

function getPageData(opts) {
  if (typeof window === 'undefined') {
    return false
  }
  const options = opts || {}
  const pageData = {
    width: options.width || window.innerWidth,
    height: options.height || window.innerHeight,
    path: options.path || window.location.pathname,
    url: options.url || window.location.href,
    branch,
  }
  if (document.referrer && document.referrer !== '') {
    pageData.referrer = document.referrer
  }
  return pageData
}
