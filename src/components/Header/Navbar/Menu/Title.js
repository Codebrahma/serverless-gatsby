import React from 'react';
import { Box, Text } from 'serverless-design-system/src';
import NavbarContext from '../../NavbarContext';

const MenuTitle = ({ name }) => (
  <NavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Box
          px={[ '10px', '10px', '8px', '25px' ]}
          py={[
            '20px',
            '20px',
            isNavbarShrinked ? '27.5px' : '35.5px'
          ]}
          transition={[
            'none',
            'none',
            isNavbarShrinked ? 'padding 0.5s' : 'none'
          ]}
        >
          <Text.span
            fontFamily='Serverless'
            fontSize={2}
            color={'white'}
            letterSpacing={0.7}
          >
            {name}
          </Text.span>
        </Box>
      )
    }
  </NavbarContext.Consumer>
);

export default MenuTitle;
