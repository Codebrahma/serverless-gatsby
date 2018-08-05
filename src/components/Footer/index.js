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
import DynamicContent from './DynamicContent';
import FooterIcon from './FooterIcon';
import FooterListItems from './FooterListItems';
import Subscribe from './Subscribe';

// TODO: Dynamic Footer. NextSteps component should be a custom renderer.
// Self contained Root Renderer for footer
const FooterWrapper = ({ path }) => (
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
      <Image src={glitchEffect} mt="-20px"/>
      <Box width={1} px={[0, 0, 2]}>
        <DynamicContent path={path}/>
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