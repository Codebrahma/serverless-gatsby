import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { Box, Flex, Card, TextField, Image } from 'serverless-design-system/src'
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

const SearchBar = ({ theme, isNavbarShrinked }) => (
  <Wrapper height={isNavbarShrinked ? 0 : 'auto'}>
    <Flex
      width={1}
      pt={1}
      pb={[1, 1, 1, 2]}
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
  </Wrapper>
)

export default withTheme(SearchBar)
