import React from 'react';

import { Box, Image } from 'serverless-design-system/src';
import NavbarContext from './NavbarContext';

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
            src={ isNavbarActive ? 'https://serverless.com/_/src/assets/images/icon-close.7b5e69727b7d98f818b8c5a3e59ab59f.png' : 'https://serverless.com/_/src/assets/images/icon-mobile-menu.ed479af87f4e20db7c06a04a19115b38.png' }
            m='auto'
          />
        </Box>
      )
    }
  </NavbarContext.Consumer>
);

export default NavButton;
