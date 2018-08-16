import React from 'react'
import { Flex, Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from 'src/components/pages/learn/comparisons/Prefooter'
import Hero from 'src/components/pages/learn/comparisons/Hero'
import ComparisonScrollList from 'src/components/pages/learn/comparisons/comparisonScrollList'

const Comparisions = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <ComparisonScrollList />
  </DefaultLayout>
)

export default Comparisions