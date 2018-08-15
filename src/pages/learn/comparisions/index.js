import React from 'react'
import { Flex, Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import ComparisonScrollList from './comparisonScrollList'

const Comparisions = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <ComparisonScrollList />
  </DefaultLayout>
)

export default Comparisions