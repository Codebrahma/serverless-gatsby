import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import {
  Absolute,
  Relative,
  Overflow,
  Flex,
  Card,
  Image,
  InlineBlock,
  Text,
} from 'serverless-design-system/src'

import { BlockLink } from 'src/components'
import BlogNavbarContext from './BlogNavbarContext'
import { getCategoryLink } from 'src/utils/blog'
import CategoriesData from 'src/pages/blog/generated-categories.json'
import searchIcon from 'src/assets/images/search-icon.svg'
import whiteSearchIcon from 'src/assets/images/white-search-icon.png'
import closeIcon from 'src/assets/images/icon-close.png'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import AutoComplete from './AutoComplete'

const searchClient = algoliasearch(
  'V3VM7IN3TH',
  'd2dac557d1fd151223e78f3597d59e78'
);

const Wrapper = styled(Overflow)`
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
        <Wrapper
          height={[ 0, 0, isNavbarShrinked ? 0 : 82 ]}
          o={isNavbarShrinked ? 'hidden' : 'visible'}
        >
          {children}
        </Wrapper>
      )
    }
  </BlogNavbarContext.Consumer>
)

class SearchBar extends React.Component {
  state = { isSearchBarActive: false }

  toggleSearchBar = () =>
    this.setState((prevState) => ({
      isSearchBarActive: !prevState.isSearchBarActive
    }))

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
              <Relative width={1}>
                <Absolute
                  left="15px"
                  top="18px"
                >
                  <Image
                    src={whiteSearchIcon}
                    height="16px"
                    width="15px"
                  />
                </Absolute>
                <InstantSearch
                  indexName="dev_BLOG_SEARCH"
                  searchClient={searchClient}
                >
                  <AutoComplete />
                </InstantSearch>
                <Absolute
                  right="15px"
                  top="18px"
                  onClick={this.toggleSearchBar}
                >
                  <Image
                    src={closeIcon}
                    height="16px"
                    width="15px"
                  />
                </Absolute>
              </Relative>
            ) : (
              <React.Fragment>
                <Card
                  height="52px"
                  px={1}
                  py={16}
                  border={`1px solid ${borderColor}`}
                  width={1}
                >
                  {
                    Object.keys(CategoriesData).map((tab, index) => (
                      <BlockLink
                        key={`category-tab-${index}`}
                        to={getCategoryLink(tab)}
                      >
                        <InlineBlock px={[1, 1, "5px", 2]}>
                          <LinkText
                            fontSize={[1, 1, 0, 1]}
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
                <Card
                  border={`1px solid ${borderColor}`}
                  borderLeft="0"
                  onClick={this.toggleSearchBar}
                >
                  <Flex.center p={16}>
                    <Image
                      src={searchIcon}
                      height={18}
                      width={18}
                    />
                  </Flex.center>
                </Card>
              </React.Fragment>
            )
          }
        </Flex>
      </SearchBarWrapper>
    )
  }
}

export default withTheme(SearchBar)
