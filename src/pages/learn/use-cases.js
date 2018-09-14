import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/use-cases/Hero'
import UseCaseList from 'src/components/pages/learn/use-cases/List'

const UseCases = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCaseList />
  </DefaultLayout>
)

export default UseCases