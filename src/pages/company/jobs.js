import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/company/jobs/Hero'

import OpenPositions from 'src/components/pages/company/jobs/OpenPositions'
import HowWeOperate from 'src/components/pages/company/jobs/HowWeOperate'
import OurValues from 'src/components/pages/company/jobs/OurValues'

import Prefooter from 'src/components/pages/home/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero />
      <OpenPositions />
      <HowWeOperate />
      <OurValues />
    </DefaultLayout>
  )
}

export default Home
