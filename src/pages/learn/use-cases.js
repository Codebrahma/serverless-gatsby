import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/use-cases/Hero'
import UseCaseScrollList from 'src/components/pages/learn/use-cases/UseCaseScrollList'

const UseCases = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCaseScrollList />
  </DefaultLayout>
)

export default UseCases