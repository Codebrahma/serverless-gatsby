import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/company/champions/Hero'
import HowToBeChampion from 'src/components/pages/company/champions/HowToBeChampion'
import { Divider } from 'src/fragments'
import OurChampions from 'src/components/pages/company/champions/OurChampions'

import Prefooter from 'src/components/pages/home/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero />
      <HowToBeChampion />
      <Divider />
      <OurChampions />
    </DefaultLayout>
  )
}

export default Home
