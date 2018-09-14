import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import theme from 'serverless-design-system/src/theme'
import { Flex } from 'serverless-design-system/src'
import './index.css'

const Layout = ({ children, data }) => (
  <Flex width={1}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Serverless' },
        { name: 'keywords', content: 'serverless, AWS Lambda' },
      ]}
    />
    <ThemeProvider theme={theme}>
      { children() }
    </ThemeProvider>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

// eslint-disable-next-line
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
