import React from 'react'
import Link from 'gatsby-link';
import { Box, Container, Flex, Logo } from 'serverless-design-system/src'
import Navbar from './Navbar'
import NavButton from './NavButton';

import logo from '../../assets/images/logo.svg';

class Header extends React.Component {
  state = { isNavbarActive: false, isNavbarShrinked: false };

  scrollHandler = () => {
    const { isNavbarShrinked } = this.state;
    if (window.scrollY > 34) {
      if (isNavbarShrinked) { return; }
      this.setState({ isNavbarShrinked: true });
    } else if (isNavbarShrinked) {
      this.setState({ isNavbarShrinked: false });
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

  toggleNavbarVisibility = () => this.setState((prevState) => (
    { isNavbarActive: !prevState.isNavbarActive }
  ));

  render() {
    const { isNavbarActive, isNavbarShrinked } = this.state;
    return (
      <Box
        position='fixed'
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
          isNavbarShrinked ? 'black' : 'transparent'
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
            <NavButton
              onClick={this.toggleNavbarVisibility}
              active={isNavbarActive}
            />
            <Navbar
              visibility={isNavbarActive}
              isNavbarShrinked={isNavbarShrinked} />
          </Flex>
        </Container>
      </Box>
    );
  }
}

export default Header;
