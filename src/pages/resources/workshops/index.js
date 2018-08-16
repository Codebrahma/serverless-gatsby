import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from './Hero'
import WorkshopList from './WorkshopList'

import Prefooter from './Prefooter'

const ResourcesWorkshops = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <WorkshopList />
  </DefaultLayout>
)

export default ResourcesWorkshops
