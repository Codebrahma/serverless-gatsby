import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from './Hero'

import Prefooter from './Prefooter'

const ResourcesOverview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
  </DefaultLayout>
)

export default ResourcesOverview
