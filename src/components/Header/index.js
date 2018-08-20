import React from 'react'
import { Background, Container, Fixed, Flex } from 'serverless-design-system/src'

import Logo from './Logo'
import Navbar from './Navbar'
import NavButton from './NavButton'
import NavbarContext from './NavbarContext'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarActive: false,
      isNavbarShrinked: !props.transparent,
      toggleNavbarActiveness: this.toggleNavbarActiveness,
    }
  }

  componentDidMount() {
    if (this.props.transparent) {
      document.addEventListener('scroll', this.scrollHandler)
    }
  }

  componentWillUnmount() {
    if (this.props.transparent) {
      document.removeEventListener('scroll', this.scrollHandler)
    }
  }

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state
    if (window.scrollY > 34) {
      if (isNavbarShrinked) {
        return
      }
      this.toggleNavbarShrinkness()
    } else if (isNavbarShrinked) {
      this.toggleNavbarShrinkness()
    }
  }

  toggleNavbarShrinkness = () =>
    this.setState(prevState => ({
      isNavbarShrinked: !prevState.isNavbarShrinked,
    }))

  toggleNavbarActiveness = () => {
    this.setState(prevState => ({ isNavbarActive: !prevState.isNavbarActive }))
  }

  render() {
    return (
      <Fixed
        width={1}
        left={0}
        right={0}
        top={0}
        zIndex='999'
        py={[2, 2, 0]}
        maxHeight='100%'
        oy={['scroll', 'scroll', 'visible']}
      >
        <Background
          background={[
            'black',
            'black',
            this.state.isNavbarShrinked ? 'black' : 'transparent',
          ]}
        >
          <Container>
            <Flex.verticallyCenter
              flexWrap='wrap'
              justifyContent='space-between'
              px={15}
            >
              <Logo />
              <NavbarContext.Provider value={this.state}>
                <NavButton />
                <Navbar />
              </NavbarContext.Provider>
            </Flex.verticallyCenter>
          </Container>
        </Background>
      </Fixed>
    )
  }
}

Header.defaultProps = { transparent: false }

export default Header
