import React from 'react';

import Testimonial from './Testimonial';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';
import DefaultLayout from '../../layouts/Default';

const FrameWorks = () => (
  <DefaultLayout
    prefooter={Prefooter}
    transparentHeader
  >
    <Hero />
    <UseCase />
    <Testimonial />
    <Features />
  </DefaultLayout>
);

export default FrameWorks;