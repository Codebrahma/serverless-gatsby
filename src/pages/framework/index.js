import React from 'react';
import Hero from './Hero';
import UseCase from './UseCase';
import { Box } from 'serverless-design-system/src';

import Testimonial from './Testimonial';

const FrameWorks = () => (
  <Box width={1} mb={200}>
    <Hero />
    <Box px={2}>
      <UseCase />
      <Testimonial />
    </Box>
  </Box>
);

export default FrameWorks;