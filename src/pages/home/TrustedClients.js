import React from 'react';

import { Box, Container } from 'serverless-design-system/src';
import TrustedClients from '../../fragments/TrustedClients';

import backgroundImage from '../../assets/images/rectangle-19.png';

export default () => (
  <Box
    width={1}
    backgroundImage={`url(${backgroundImage})`}
    px={[ 0, 0, 2, 6, 8 ]}
    pt={5}
    pb={[300, 300, 12, 12]}
  >
    <Container>
      <TrustedClients />
    </Container>
  </Box>
);
