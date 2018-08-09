// TODO
// Identify how to include hard coded values in theme
// Negative pixel for icon top - possible to include in theme
// Make image load faster

import React from 'react';
import {
  Flex,
  Box,
} from 'serverless-design-system/src';

import glitchEffect from '../../assets/images/glitchEffect.png';
import FooterIcon from './FooterIcon';
import FooterListItems from './FooterListItems';
import Subscribe from './Subscribe';

// Self contained Root Renderer for footer
const FooterWrapper = ({ prefooter }) => (
  <Flex flexDirection='column'>
    <Box
      height={75}
      backgroundImage={`url(${glitchEffect})`}
    />
    <Box
      bg="black"
      pt={[0, 0, '100px']}
      pb="100px"
    >
      <Flex
        flexDirection="row"
        m="auto"
        flexWrap="wrap"
        maxWidth={1}
      >
        <Box
          width={1}
          px={[0, 0, 2]}
        >
          {  prefooter ? prefooter() : null }
          <FooterIcon />
        </Box>

        <Flex
          width={1}
          px={2}
          flexWrap="wrap"
        >
          <FooterListItems />
          <Subscribe />
        </Flex>
      </Flex>
    </Box>
  </Flex>
);

export default FooterWrapper;