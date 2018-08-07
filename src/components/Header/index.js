import React from 'react'
import Link from 'gatsby-link';
import { Fixed, Container, Flex, Logo } from 'serverless-design-system/src'

import Navbar from './Navbar'
import NavButton from './NavButton';
import NavbarContext from './NavbarContext';

import logo from '../../assets/images/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarActive: false,
      isNavbarShrinked: props.transparent,
      toggleNavbarActiveness: this.toggleNavbarActiveness
    };
  }

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state;
    if (window.scrollY > 34) {
      if (isNavbarShrinked) { return; }
      this.toggleNavbarShrinkness();
    } else if (isNavbarShrinked) {
      this.toggleNavbarShrinkness();
    }
  }

  componentDidMount() {
    if (this.props.transparent) {
      document.addEventListener('scroll', this.scrollHandler);
    }
  }

  componentWillUnmount() {
    if (this.props.transparent) {
      document.removeEventListener('scroll', this.scrollHandler);
    }
  }

  toggleNavbarShrinkness = () => this.setState((prevState) => (
    { isNavbarShrinked: !prevState.isNavbarShrinked }
  ));

  toggleNavbarActiveness = () => {
    this.setState((prevState) => (
      { isNavbarActive: !prevState.isNavbarActive }
    ));
  }

  render() {
    return (
      <Fixed
        width={1}
        left={0}
        right={0}
        top={0}
        zIndex='999'
        py={[2, 2, 0, 0, 0]}
        maxHeight='100%'
        oy={['scroll', 'scroll', 'visible']}
        bg={[
          'black',
          'black',
          this.state.isNavbarShrinked ? 'black' : 'transparent'
        ]}
      >
        <Container>
          <Flex
            flexWrap='wrap'
            alignItems='center'
            justifyContent='space-between'
            px={15}
          >
            <Link to='/'>
              <Logo
                src={logo}
                height={['22px', '22px', '22px', '30px']}
                width={['125px', '125px', '125px', '170px']}
                alt="Serverless"
              />
            </Link>
            <NavbarContext.Provider value={this.state}>
              <NavButton />
              <Navbar />
            </NavbarContext.Provider>
          </Flex>
        </Container>
      </Fixed>
    );
  }
}

Header.defaultProps = { transparent: false };

export default Header;
