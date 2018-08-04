import React from 'react';
import Hero from './Hero';
import UseCase from './UseCase';
import { Box } from 'serverless-design-system/src';

const FrameWorks = () => (
  <Box width={1}>
    <Hero />
    <Box px={2}>
      <UseCase />
    </Box>
  </Box>
);

export default FrameWorks;