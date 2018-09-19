import React from 'react'

import { Testimonial, Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/framework/Hero'
import UseCase from 'src/components/pages/framework/UseCase'
import Features from 'src/components/pages/framework/Features'
import Prefooter from 'src/components/pages/framework/Prefooter'

const FrameWorks = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title="Serverless Framework - Build applications on AWS Lambda, Google CloudFunctions, Azure Functions, AWS Flourish and more"
      description="The application framework for building web, mobile and IoT applications on AWS Lambda, Google CloudFunctions, Azure Functions, IBM OpenWhisk, AWS Flourish and more."
      location={location}
    />
    <Hero />
    <UseCase />
    <Testimonial />
    <Features />
  </DefaultLayout>
)

export default FrameWorks
