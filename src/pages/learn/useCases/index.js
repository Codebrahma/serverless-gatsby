import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import UseCaseScrollList from './UseCaseScrollList'

const UseCases = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCaseScrollList />
  </DefaultLayout>
)

export default UseCases