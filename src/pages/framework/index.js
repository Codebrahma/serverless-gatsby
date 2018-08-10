import React from 'react'

import { Testimonial } from 'src/fragments';
import DefaultLayout from 'src/layouts/Default';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';

const FrameWorks = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCase />
    <Testimonial />
    <Features />
  </DefaultLayout>
)

export default FrameWorks
