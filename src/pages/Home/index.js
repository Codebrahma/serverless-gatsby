import React from 'react'

import { Box, Testimonial } from 'serverless-design-system/src';
import cocaColaLogo from '../../assets/images/cocacola-logo.png';
import Hero from './Hero';
import Benefits from './Benefits';
import TrustedClients from '../../components/TrustedClients';

export default () => (
  <Box width={1}>
    <Hero />
    <Benefits />

    <Testimonial
      img={cocaColaLogo}
      name="Patrick Brandt"
      designation="Solutions Architect at The Coca Cola Company"
      alt="Coca Cola"
    >
      "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
    </Testimonial>

    <TrustedClients />
  </Box>
);
