import React from 'react'

import Testimonial from 'src/fragments/Testimonial'
import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/home/Hero'
import Benefits from 'src/components/pages/home/Benefits'
import PlatformFeatures from 'src/components/pages/home/PlatformFeatures'
import Prefooter from 'src/components/pages/home/Prefooter'
import TrustedClients from 'src/components/pages/home/TrustedClients'

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
