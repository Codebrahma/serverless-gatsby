/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import GAInitializer from './GAInitializer'
import pageView from '../../utils/analytics/page'

const isClient = typeof window !== 'undefined'
const googleAnalyticsUA = process.env.GATSBY_GOOGLE_ANALYTICS_UA

class GoogleAnalyticsTracker extends Component {

  componentWillMount() {
    if (isClient) {
      if (process.env.NODE_ENV === 'production') {
        ReactGA.initialize(googleAnalyticsUA)
        ReactGA.ga('require', 'GTM-M5WQLDN')
      } else {
        console.info('ga.create', googleAnalyticsUA)
      }
      pageView()
    }
  }

  componentWillReceiveProps(props) {
    // if route is new, log pageview
    if ((props.path !== this.props.path) || (props.query !== this.props.query)) {
      pageView()
    }
  }

  render() {
    return (<GAInitializer />)
  }
}

GoogleAnalyticsTracker.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  path: PropTypes.string.isRequired,
}

export default GoogleAnalyticsTracker
