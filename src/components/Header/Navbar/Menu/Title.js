import React from 'react';
import { Box, Text } from 'serverless-design-system/src';

const MenuTitle = ({ name }) => (
  <Box
    px={[ '10px', '10px', '12px', '25px' ]}
    py={[ '20px', '20px', '35.5px' ]}>
    <Text.span
      fontFamily='Serverless'
      fontSize={'16px'}
      color={'white'}
      letterSpacing={0.7}
    >
      {name}
    </Text.span>
  </Box>
);

export default MenuTitle;
