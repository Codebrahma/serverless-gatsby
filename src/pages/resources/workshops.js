import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/workshops/Hero'
import WorkshopList from 'src/components/pages/resources/workshops/WorkshopList'
import Prefooter from 'src/components/pages/resources/Prefooter'
import { Helmet } from 'src/fragments'

const ResourcesWorkshops = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title="Serverless Workshops"
      description="Join a Serverless Workshop in your area"
      location={location}
    />
    <Hero />
    <WorkshopList />
  </DefaultLayout>
)

export default ResourcesWorkshops
