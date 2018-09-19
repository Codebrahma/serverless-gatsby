import React from 'react'

export default class GAInitializer extends React.Component {
  componentDidMount() {
    if (!this.scriptIsAdded) {
      return this.addScript()
    }
  }

  addScript = () => {
    var el, s
    this.scriptIsAdded = true
    el = document.createElement('script')
    el.type = 'text/javascript'
    el.async = true
    el.src = '//www.google-analytics.com/analytics.js'
    s = document.getElementsByTagName('script')[0]
    return s.parentNode.insertBefore(el, s)
  }

  render() {
    return null
  }
}
