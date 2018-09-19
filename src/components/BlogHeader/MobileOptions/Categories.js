import React from 'react'
import Link from 'gatsby-link'
import { Box, Flex, Text } from 'serverless-design-system/src'
import BlogNavbarContext from '../BlogNavbarContext'
import CategoriesData from 'src/constants/categories.json'
import { getCategoryNameById } from 'src/utils/blog'

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
            py={3}
          >
            <Category link={`/blog`}>
              all
            </Category>
            {
              Object.keys(CategoriesData).map((key) => (
                <Category link={`/category/${key}`}>
                  { getCategoryNameById(key) }
                </Category>
              ))
            }
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
