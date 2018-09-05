import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/workshops/Hero'
import WorkshopList from 'src/components/pages/resources/workshops/WorkshopList'
import Prefooter from 'src/components/pages/resources/Prefooter'

const ResourcesWorkshops = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <WorkshopList />
  </DefaultLayout>
)

export default ResourcesWorkshops
