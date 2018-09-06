import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { Box, Flex, Card, TextField, Image } from 'serverless-design-system/src'

import BlogNavbarContext from './BlogNavbarContext'
import searchIcon from 'src/assets/images/search-icon.svg'

const Wrapper = styled(Box)`
  overflow: hidden;
  transition: height 0.5s;
`

const placeholder = [
  'application development',
  'operations & observability',
  'guides & tutorials',
  'engineering culture',
  'news'
].join(' '.repeat(10))

const SearchBarWrapper = ({ children }) => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Wrapper height={[ 0, 0, isNavbarShrinked ? 0 : 82 ]}>
          {children}
        </Wrapper>
      )
    }
  </BlogNavbarContext.Consumer>
)

const SearchBar = ({ theme }) => (
  <SearchBarWrapper>
    <Flex
      width={1}
      pt={1}
      pb={[1, 1, 2]}
    >
      <TextField
        p={16}
        border={`1px solid ${theme.colors.gray[2]}`}
        width={1}
        bg="transparent"
        placeholder={placeholder}
        fontSize={1}
        fontFamily="Serverless"
        lineHeight={1}
        opacity={0.6}
        color="white"
      />
      <Card
        border={`1px solid ${theme.colors.gray[2]}`}
        borderLeft={`0px`}
      >
        <Flex.center p={16}>
          <Image
            src={searchIcon}
            height={18}
            width={18}
          />
        </Flex.center>
      </Card>
    </Flex>
  </SearchBarWrapper>
)

export default withTheme(SearchBar)
