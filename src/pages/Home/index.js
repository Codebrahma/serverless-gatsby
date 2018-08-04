import React from 'react'

import { Box } from 'serverless-design-system/src';
import Hero from './Hero';
import Benefits from './Benefits';
import TrustedClients from '../../components/TrustedClients';

export default () => (
  <Box width={1}>
    <Hero />
    <Benefits />
    <TrustedClients />
  </Box>
);
