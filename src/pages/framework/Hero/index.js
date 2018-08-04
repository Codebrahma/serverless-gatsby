import React from 'react';
import {
  Flex,
  Box,
  Container,
} from 'serverless-design-system/src';

import Header from './Header';
import HeroImage from './HeroImage';

export default () => (
  <Box width={1}>
    <Box bg='black'>
      <Container
        px={2}
        mb="400px"
        maxWidth={1}
        width={1}
      >
        <Flex flexDirection="column" justifyContent="center">
          <Header />
          <HeroImage />
        </Flex>
      </Container>    
    </Box>
  </Box>
);
