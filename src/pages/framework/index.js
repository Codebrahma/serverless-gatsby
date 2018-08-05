import React from 'react';
import { Box } from 'serverless-design-system/src';
import Hero from './Hero';
import UseCase from './UseCase';
import Testimonial from './Testimonial';
import Features from './Features';

const FrameWorks = () => (
  <Box width={1} mb={200}>
    <Hero />
    <Box px={2}>
      <UseCase />
      <Testimonial />
      <Features />
    </Box>
  </Box>
);

export default FrameWorks;