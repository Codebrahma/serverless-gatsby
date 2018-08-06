// TODO
// Identify how to include hard coded values in theme
// Negative pixel for icon top - possible to include in theme
// Make image load faster


import React from 'react';
import {
  Flex,
  Box,
  Image,
} from 'serverless-design-system/src';

import glitchEffect from '../../assets/images/glitchEffect.png';
import FooterIcon from './FooterIcon';
import FooterListItems from './FooterListItems';
import Subscribe from './Subscribe';

// TODO: Dynamic Footer. NextSteps component should be a custom renderer.
// Self contained Root Renderer for footer
const FooterWrapper = ({ prefooter }) => (
  <Box
    bg="black"
    pt={[0, 0, '100px']}
    pb="100px"
    mt={ prefooter ? [ '250px', '250px', '115px' ] : 0 }
  >
    <Flex
      flexDirection="row"
      m="auto"
      flexWrap="wrap"
      maxWidth={1}
    >
      <Image src={glitchEffect} mt="-20px"/>
      <Box width={1} px={[0, 0, 2]}>
        { prefooter() }
        <FooterIcon />
      </Box>
      <Flex width={1} px={2} flexWrap="wrap">
        <FooterListItems />
        <Subscribe />
      </Flex>
    </Flex>
  </Box>
);

export default FooterWrapper;