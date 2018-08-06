import React from 'react';
import { Box } from 'serverless-design-system/src';

import Testimonial from './Testimonial';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';
import DefaultLayout from '../../layouts/Default';

const FrameWorks = () => (
  <DefaultLayout prefooter={Prefooter}>
    <Hero />
    <Box px={2}>
      <UseCase />
      <Testimonial />
      <Features />
    </Box>
  </DefaultLayout>
);

export default FrameWorks;