import React from 'react';
import {
  Flex,
  Box,
  Container,
} from 'serverless-design-system/src';

import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import CloudProviders from './CloudProviders';

import HeroActions from '../../../components/Fragments/Common/HeroAction';

export default () => (
  <Box width={1}>
    <Box bg='black'>
      <Container
        px={2}
        maxWidth={1}
        width={1}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          py={[3, 3, 3, 5]}
        >
          <Header />
          <HeroImage />
          <Advantage />
          <HeroActions
            firstBtn={{ name: 'quick start', to: '/framework/docs/getting-started/', completed: false }}
            secondBtn={{ name: 'sign up', to: 'https://dashboard.serverless.com/', crossDomain: true, completed: false }}
          />
          <CloudProviders />
        </Flex>
      </Container>
    </Box>
  </Box>
);
