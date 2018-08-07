import React from 'react';

import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';
import DefaultLayout from '../../layouts/Default';

const EventGateway = () => (
  <DefaultLayout
    prefooter={Prefooter}
    transparentHeader
  >
    <Hero />
    <UseCase />
    <Features />
  </DefaultLayout>
);

export default EventGateway;