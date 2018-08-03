import React from 'react'

import { Box } from 'serverless-design-system/src';
import Hero from '../components/Hero';
import TrustedClients from '../components/TrustedClients';

const IndexPage = () => (
  <Box width={1}>
    <Hero />
    <TrustedClients />
  </Box>
)

export default IndexPage
