import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/company/champions/Hero'
import HowToBeChampion from 'src/components/pages/company/champions/HowToBeChampion'
import { Divider, Helmet } from 'src/fragments'
import OurChampions from 'src/components/pages/company/champions/OurChampions'
import Prefooter from 'src/components/pages/home/Prefooter'

const Champions = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet title="Serverless Champions" location={location} />
    <Hero />
    <HowToBeChampion />
    <Divider />
    <OurChampions />
  </DefaultLayout>
)

export default Champions
