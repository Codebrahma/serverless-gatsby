import React from 'react'

import { Testimonial } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/framework/Hero'
import UseCase from 'src/components/pages/framework/UseCase'
import Features from 'src/components/pages/framework/Features'
import Prefooter from 'src/components/pages/framework/Prefooter'

const FrameWorks = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCase />
    <Testimonial />
    <Features />
  </DefaultLayout>
)

export default FrameWorks
