import React from 'react'
import { Flex, Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import ComparisionList from './ComparisionList'
import ComparisionSelector from './ComparisionSelector'

const Comparisions = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Flex flexDirection={['column', 'column', 'row']}>
      <ComparisionSelector />
      <ComparisionList />
    </Flex>
  </DefaultLayout>
)

export default Comparisions