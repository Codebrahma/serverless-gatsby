import React from 'react'
import Link from 'gatsby-link'
import { Box, Flex, Text } from 'serverless-design-system/src'
import BlogNavbarContext from '../BlogNavbarContext'

const Category = ({ children, link }) => (
  <Box py={1}>
    <Link to={link}>
      <Text.span
        color="white"
        lineHeight={0}
        letterSpacing="text"
        align="center"
      >
        { children }
      </Text.span>
    </Link>
  </Box>
)

export default () => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarActive }) => (
        isNavbarActive && (
          <Flex.center
            flexDirection="column"
            pt={1}
            pb={2}
          >
            <Category link={'/category/application-development'}>application development</Category>
            <Category link={'/category/operations-and-observability'}>operations & observability</Category>
            <Category link={'/category/guides-and-tutorials'}>guides & tutorials</Category>
            <Category link={'/category/engineering-culture'}>engineering culture</Category>
            <Category link={'/category/news'}>news</Category>
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
