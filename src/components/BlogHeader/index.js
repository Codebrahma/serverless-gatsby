import React from 'react'
import { Box } from 'serverless-design-system/src'
import HeaderWrapper from './Wrapper'
import ServerlessLink from './ServerlessLink'
import LogoAndNewsLetterForm from './LogoAndNewsLetterForm'
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
    return (
      <HeaderWrapper
        width={1}
        maxHeight='100%'
        oy={['scroll', 'scroll', 'visible']}
      >
        <Box
          py={[2, 2, 1]}
          bg="black"
        >
          <AppContainer>
            <ServerlessLink {...this.state} />
            <LogoAndNewsLetterForm {...this.state} />
            <SearchBar {...this.state} />
          </AppContainer>
        </Box>
      </HeaderWrapper>
    )
  }
}
