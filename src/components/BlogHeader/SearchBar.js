import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import {
  Box,
  Flex,
  Card,
  TextField,
  Image,
  InlineBlock,
  Text,
} from 'serverless-design-system/src'

import { BlockLink } from 'src/components'
import BlogNavbarContext from './BlogNavbarContext'
import searchIcon from 'src/assets/images/search-icon.svg'
import { getCategoryLink } from 'src/utils/blog'
import CategoriesData from 'src/pages/blog/generated-categories.json'

const Wrapper = styled(Box)`
  overflow: hidden;
  transition: height 0.5s;
`

const LinkText = styled(Text.span)`
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

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

class SearchBar extends React.Component {
  state = { isSearchBarActive: false }

  toggleSearchBar = () => this.setState((prevState) => {
    isSearchBarActive: !prevState.isSearchBarActive
  })

  render() {
    const borderColor = this.props.theme.colors.gray[2];
    return (
      <SearchBarWrapper>
        <Flex
          width={1}
          py={1}
          mb={1}
          justifyContent="space-between"
        >
          {
            this.state.isSearchBarActive ? (
              <TextField
                p={16}
                border={`1px solid ${borderColor}`}
                width={1}
                bg="white"
                fontSize={1}
                fontFamily="Serverless"
                lineHeight={1}
                opacity={0.6}
                color="white"
              />
            ) : (
              <Card
                height="52px"
                px={1}
                py={16}
                border={`1px solid ${borderColor}`}
                width={1}
              >
                {
                  Object.keys(CategoriesData).map((tab, index) => (
                    <BlockLink to={getCategoryLink(tab)}>
                      <InlineBlock
                        key={`category-tab-${index}`}
                        px={[1, 1, 2]}
                      >
                        <LinkText
                          fontSize={1}
                          fontFamily="Serverless"
                          lineHeight={1}
                          color="white"
                        >
                          { CategoriesData[tab] }
                        </LinkText>
                      </InlineBlock>
                    </BlockLink>
                  ))
                }
              </Card>
            )
          }
          <Card
            border={`1px solid ${borderColor}`}
            borderLeft="0"
          >
            <Flex.center p={16} onClick={this.toggleSearchBar}>
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
  }
}

export default withTheme(SearchBar)
