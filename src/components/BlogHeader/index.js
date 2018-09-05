import React from 'react'
import {
  Box,
  Background,
  Flex,
  Text,
} from 'serverless-design-system/src'
import Link from 'gatsby-link'
import HeaderWrapper from './Wrapper'
import Logo from './Logo'
import NewsLetterForm from './NewsLetterForm'
import SearchBar from './SearchBar'
import AppContainer from './../AppContainer'

export default class BlogHeader extends React.Component {
  state = { isNavbarShrinked: false }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler)
  }

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state
    if (window.scrollY >= 125 ) {
      if (isNavbarShrinked) { return }
      this.toggleNavbarShrinkness()
    } else if (isNavbarShrinked) {
      this.toggleNavbarShrinkness()
    }
  }

  toggleNavbarShrinkness = () =>
    this.setState(prevState => ({
      isNavbarShrinked: !prevState.isNavbarShrinked,
    }))

  render() {
    const { isNavbarShrinked } = this.state;

    return (
      <HeaderWrapper
        width={1}
        maxHeight='100%'
        oy={['scroll', 'scroll', 'visible']}
      >
        <Background background="black">
          <Box py={[2, 2, 1]}>
            <AppContainer>
              <Box
                height={[0, 0, isNavbarShrinked ? 0 : 15 ]}
                style={{ transition: "height 0.5s", overflow: 'hidden' }}
              >
                <Link to={'/'}>
                  <Text.p
                    my={0}
                    fontSize={0}
                    color="white"
                    opacity={0.5}
                  >
                    &larr; serverless.com
                  </Text.p>
                </Link>
              </Box>

              <Flex.verticallyCenter
                flexWrap='wrap'
                justifyContent='space-between'
                py={isNavbarShrinked ? 0 : 15}
                style={{ transition: "padding 0.5s" }}
              >
                <Box width={[1, 1, 0.65]}>
                  <Logo />
                </Box>
                <Box width={[1, 1, 0.35]}>
                  <NewsLetterForm />
                </Box>
              </Flex.verticallyCenter>
              <Box
                height={isNavbarShrinked ? 0 : 'auto'}
                style={{ overflow: 'hidden', transition: 'height 0.5s' }}
              >
                <SearchBar />
              </Box>
            </AppContainer>
          </Box>
        </Background>
      </HeaderWrapper>
    )
  }
}
