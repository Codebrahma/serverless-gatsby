import React from 'react'
import { Flex, Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import UseCasesList from './UseCasesList'
import UseCasesSelector from './UseCasesSelector'

const UseCases = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Flex flexDirection={['column', 'column', 'row']}>
      <UseCasesSelector />
      <UseCasesList />
    </Flex>
  </DefaultLayout>
)

export default UseCases