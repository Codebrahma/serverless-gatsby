import React from 'react'

import Hero from './home/Hero';
import Benefits from './home/Benefits';
import Testimonial from './home/Testimonial';
import PlatformFeatures from './home/PlatformFeatures';
import Prefooter from './home/Prefooter';
import TrustedClients from './home/TrustedClients';
import DefaultLayout from '../layouts/Default';

const Home = () => {
   return (
    <DefaultLayout
      prefooter={Prefooter}
      transparentHeader
    >
      <Hero />
      <Benefits />
      <Testimonial />
      <PlatformFeatures />
      <TrustedClients />
    </DefaultLayout>
  );
 }

export default Home;
