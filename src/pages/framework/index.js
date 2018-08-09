import React from 'react';

import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';
import Testimonial from './../../components/Fragments/Common/Testimonial';
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