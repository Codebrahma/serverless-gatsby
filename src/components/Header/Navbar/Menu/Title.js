import React from 'react';
import { Box, Text } from 'serverless-design-system/src';
import NavbarContext from '../../NavbarContext';

export default ({ name }) => (
  <NavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Box
          px={[ 1, 1, '8px', '25px' ]}
          py={[
            2,
            2,
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
