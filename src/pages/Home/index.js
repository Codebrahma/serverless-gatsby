import React from 'react'

import { Box } from 'serverless-design-system/src';
import Hero from './Hero';
import Benefits from './Benefits';
import Testimonial from './Testimonial';
import TrustedClients from '../../components/TrustedClients';

export default () => (
  <Box width={1}>
    <Hero />
    <Benefits />
    <Testimonial />
    <TrustedClients />
  </Box>
);
