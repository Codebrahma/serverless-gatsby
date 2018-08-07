import React from 'react';
import { Box } from 'serverless-design-system/src';

import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';
import DefaultLayout from '../../layouts/Default';

const EventGateway = () => (
  <DefaultLayout
    prefooter={Prefooter}
    transparentHeader
  >
    <Hero />
    <Box px={2}>
      <UseCase />
      <Features />
    </Box>
  </DefaultLayout>
);

export default EventGateway;