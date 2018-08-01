import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'serverless-design-system/src/theme';

import { Flex, Box } from 'serverless-design-system/src';

import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <Flex mt="200px">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <Flex>
        <Box
          display={['block', 'block', 'flex', 'flex', 'flex']}
          px="20px"
          m="auto"
          flexWrap="wrap"
          maxWidth="1260px"
          mb="300px"
        >
          {children()}
        </Box>
        <Footer />
      </Flex>
    </ThemeProvider>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
