import React from 'react'

import { Box, Container, Flex, Logo } from 'serverless-design-system/src'
import Navbar from './Navbar'
import NavButton from './NavButton';

class Header extends React.Component {
  state = { isNavbarActive: false };

  toggleNavbarVisibility = () => this.setState((prevState) => {
    return { isNavbarActive:  !prevState.isNavbarActive };
  });

  render() {
    const { isNavbarActive } = this.state;
    return (
      <Box
        position='fixed'
        width={1}
        left={0}
        right={0}
        top={0}
        zIndex='999'
        bg='black'
        py={[2, 2, 0, 0, 0]}
        maxHeight='100%'
        oy={['scroll', 'scroll', 'visible']}
      >
        <Container>
          <Flex
            flexWrap='wrap'
            alignItems='center'
            justifyContent='space-between'
            px={15}
          >
            <Logo
              src='https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png'
              height={['22px', '22px', '22px', '30px']}
              width={['125px', '125px', '125px', '170px']}
              alt="Serverless"
            />
            <NavButton
              onClick={this.toggleNavbarVisibility}
              active={isNavbarActive}
            />
            <Navbar visibility={isNavbarActive} />
          </Flex>
        </Container>
      </Box>
    );
  }
}

export default Header;
