import React from 'react';
import { Box, Container } from 'serverless-design-system/src';

import HeroHeader from './Header';
import HeroImage from './Image';
import HeroActions from './Actions';
import HeroFooter from './Footer';

export default () => (
  <Box width={1}>
    <Box bg='black'>
      <Container px={0} py={4}>
        <HeroHeader />
        <HeroImage />
        <HeroActions />
        <HeroFooter />
      </Container>
    </Box>
  </Box>
);
