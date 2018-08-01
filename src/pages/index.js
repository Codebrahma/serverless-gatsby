import React from 'react'

import { Box, Flex } from 'serverless-design-system/src';
import TrustedClients from '../components/TrustedClient';

const IndexPage = () => (
  <Box mt={'100px'}>
    <Flex width="100%">
      <TrustedClients />
    </Flex>
  </Box>
)

export default IndexPage
