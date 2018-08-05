import React from 'react';
import { Box } from 'serverless-design-system/src';

import Testimonial from './Testimonial';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';

const Dashboard = () => (
  <Box width={1} mb={200}>
    <Hero />
    <Box px={2}>
      <UseCase />
      <Testimonial />
      <Features />
    </Box>
  </Box>
);

export default Dashboard;