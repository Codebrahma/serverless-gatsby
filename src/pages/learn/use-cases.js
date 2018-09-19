import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/use-cases/Hero'
import UseCaseList from 'src/components/pages/learn/use-cases/List'
import { Helmet } from 'src/fragments'

const UseCases = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title="Serverless Use Cases"
      description="Use Cases for Serverless"
      location={location}
    />
    <Hero />
    <UseCaseList />
  </DefaultLayout>
)

export default UseCases