import React from 'react'

import { Box } from 'serverless-design-system/src';
import Hero from './Hero';
import Benefits from './Benefits';
import Testimonial from './Testimonial';
import PlatformFeatures from './PlatformFeatures';
import TrustedClients from '../../components/TrustedClients';

export default () => (
  <Box width={1}>
    <Hero />
    <Benefits />
    <Testimonial />
    <PlatformFeatures />
    <TrustedClients />
  </Box>
);
