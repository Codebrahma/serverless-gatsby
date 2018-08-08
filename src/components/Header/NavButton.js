import React from 'react';

import { Box, Image } from 'serverless-design-system/src';
import NavbarContext from './NavbarContext';

import closeIcon from '../../assets/images/icon-close.png';
import mobileMenuIcon from '../../assets/images/icon-mobile-menu.png';

const NavButton = () => (
  <NavbarContext.Consumer>
    {
      ({ isNavbarActive, toggleNavbarActiveness }) => (
        <Box
          height='16px'
          width='16px'
          lineHeight='100%'
          display={['flex', 'flex', 'none']}
          onClick={toggleNavbarActiveness}
        >
          <Image
            src={ isNavbarActive ? closeIcon : mobileMenuIcon }
            m='auto'
          />
        </Box>
      )
    }
  </NavbarContext.Consumer>
);

export default NavButton;
