import React from 'react'

import { Box } from 'serverless-design-system/src';
import Hero from './Home/Hero';
import Benefits from './Home/Benefits';
import Testimonial from './Home/Testimonial';
import PlatformFeatures from './Home/PlatformFeatures';
import TrustedClients from '../components/TrustedClients';

export default () => (
  <Box width={1}>
    <Hero />
    <Benefits />
    <Testimonial />
    <PlatformFeatures />
    <TrustedClients />
  </Box>
);
