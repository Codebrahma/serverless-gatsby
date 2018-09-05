import React from 'react'
import Link from 'gatsby-link'
import { Box, Flex, Text } from 'serverless-design-system/src'
import BlogNavbarContext from '../BlogNavbarContext'

const Category = ({ children }) => (
  <Box py={1}>
    <Text.span
      color="white"
      lineHeight={0}
      letterSpacing="text"
      align="center"
    >
      { children }
    </Text.span>
  </Box>
)

export default () => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarActive }) => (
        isNavbarActive && (
          <Flex.center
            flexDirection="column"
            py={3}
          >
            <Category>application development</Category>
            <Category>operations & observability</Category>
            <Category>guides & tutorials</Category>
            <Category>engineering culture</Category>
            <Category>news</Category>
            <Box pt={3}>
              <Link to="/">
                <Text.p
                  mt={0}
                  color="white"
                  opacity={0.5}
                >
                  &lt; serverless.com
                </Text.p>
              </Link>
            </Box>
          </Flex.center>
        )
      )
    }
  </BlogNavbarContext.Consumer>
)
