import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from './Hero'
import GetInvolved from './GetInvolved'

import Prefooter from './Prefooter'

const ResourcesOverview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <GetInvolved />
  </DefaultLayout>
)

export default ResourcesOverview
