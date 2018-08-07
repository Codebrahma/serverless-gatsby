import React from 'react';

import { Box } from 'serverless-design-system/src';
import NavbarContext from './../../NavbarContext';

const MenuDescription = ({ wrapperStyles, children }) => (
  <NavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Box
          px={[1, 1, 4]}
          pt={[1, 1, 3]}
          pb={4}
          position={[ 'relative', 'relative', 'absolute' ]}
          zIndex='999'
          top={[ '0', '0', isNavbarShrinked ? '72px' : '90px' ]}
          left={[ '0', '0', '-50%' ]}
          background={[
            'none',
            'none',
            'linear-gradient(210deg, #000000 25%, #222222), linear-gradient(#000000, #000000)'
          ]}
          minWidth={[ 0, 0, '250px' ]}
          boxShadow='0 10px 50px 0 rgba(0, 0, 0, 0.15)'
          {...wrapperStyles}
        >
          { children }
        </Box>
      )
    }
  </NavbarContext.Consumer>
)

export default MenuDescription;
