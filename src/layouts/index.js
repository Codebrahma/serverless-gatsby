import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from 'serverless-design-system/src/theme'
import { Flex } from 'serverless-design-system/src'
import './index.css'

const Layout = ({ children, data }) => (
  <Flex width={1}>
    <ThemeProvider theme={theme}>
      { children() }
    </ThemeProvider>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
