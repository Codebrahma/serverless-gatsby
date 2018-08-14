import React from 'react'

import Testimonial from 'src/fragments/Testimonial'
import TrustedClients from 'src/fragments/TrustedClients'
import DefaultLayout from 'src/layouts/Default'

import Hero from './home/Hero'
import Benefits from './home/Benefits'
import PlatformFeatures from './home/PlatformFeatures'
import Prefooter from './home/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero />
      <Benefits />
      <Testimonial />
      <PlatformFeatures />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
