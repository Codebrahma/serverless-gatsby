import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/overview/Hero'
import GetInvolved from 'src/components/pages/resources/overview/GetInvolved'
import Prefooter from 'src/components/pages/resources/Prefooter'
import { Helmet } from 'src/fragments'

const ResourcesOverview = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet title="Serverless Community" location={location} />
    <Hero />
    <GetInvolved />
  </DefaultLayout>
)

export default ResourcesOverview
