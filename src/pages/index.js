import React from 'react'

import { Box } from 'serverless-design-system/src';
import Hero from './home/Hero';
import Benefits from './home/Benefits';
import Testimonial from './home/Testimonial';
import PlatformFeatures from './home/PlatformFeatures';
import TrustedClients from '../components/TrustedClients';


 const Home = ({ data }) => {
   return (
    <Box width={1}>
      <Hero />
      <Benefits />
      <Testimonial />
      <PlatformFeatures />
      <TrustedClients />
    </Box>
  );
 }

export default Home;
