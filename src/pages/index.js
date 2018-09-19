import React from 'react'

import { Testimonial, TrustedClients, Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/home/Hero'
import Benefits from 'src/components/pages/home/Benefits'
import PlatformFeatures from 'src/components/pages/home/PlatformFeatures'
import Prefooter from 'src/components/pages/home/Prefooter'

const Home = ({ location }) => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Helmet
        title="Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more"
        description="Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more."
        location={location}
      />
      <Hero />
      <Benefits />
      <Testimonial />
      <PlatformFeatures />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
