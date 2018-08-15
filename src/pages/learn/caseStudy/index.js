import React from 'react'
import { Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import Parallax from './Parallax'

const Overview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Parallax />
  </DefaultLayout>
)

export default Overview