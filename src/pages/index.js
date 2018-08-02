import React from 'react'

import { Box, Flex } from 'serverless-design-system/src';
import Hero from '../components/Hero';
import TrustedClients from '../components/TrustedClients';

const IndexPage = () => (
  <Box mt={'90px'} width={1}>
    <Hero />
    <TrustedClients />
  </Box>
)

export default IndexPage
