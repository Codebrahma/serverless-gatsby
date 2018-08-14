import React from 'react'
import { Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'

const Overview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Box mb={3}>
      Content
    </Box>
    Learn Overview screen
  </DefaultLayout>
)

export default Overview