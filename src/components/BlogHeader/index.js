import React from 'react'
import { Box } from 'serverless-design-system/src'
import HeaderWrapper from './Wrapper'
import ServerlessLink from './ServerlessLink'
import LogoAndOptions from './LogoAndOptions'
import SearchBar from './SearchBar'
import Categories from './MobileOptions/Categories'
import BlogNavbarContext from './BlogNavbarContext'
import AppContainer from './../AppContainer'

export default class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarShrinked: false,
      isNavbarActive: false,
      toggleNavbarActiveness: this.toggleNavbarActiveness,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler)
  }

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state
    const movingDown = this.previousY && ( this.previousY < window.scrollY )
    this.previousY = window.scrollY
    if (movingDown) {
      if (isNavbarShrinked || window.scrollY < 55) { return }
      this.setState({ isNavbarShrinked: true })
    } else if (isNavbarShrinked) {
      this.setState({ isNavbarShrinked: false })
    }
  }

  toggleNavbarShrinkness = () =>
    this.setState(prevState => ({
      isNavbarShrinked: !prevState.isNavbarShrinked,
    }))

  toggleNavbarActiveness = () =>
    this.setState(prevState => ({
      isNavbarActive: !prevState.isNavbarActive
    }))

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper
          width={1}
          maxHeight='100%'
          oy={['scroll', 'scroll', 'visible']}
        >
          <Box
            py={[0, 0, 1]}
            bg="black"
          >
            <AppContainer>
              <BlogNavbarContext.Provider value={this.state}>
                <ServerlessLink />
                <LogoAndOptions />
                <SearchBar />
                <Categories />
              </BlogNavbarContext.Provider>
            </AppContainer>
          </Box>
        </HeaderWrapper>
        <Box
          pt={[ 55, 55, 196 ]}
          bg="black"
        />
      </React.Fragment>
    )
  }
}
