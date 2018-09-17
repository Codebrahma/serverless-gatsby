import React from 'react'

import { TrustedClients, Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'

import Content from 'src/components/pages/enterprise/Content'
import Prefooter from 'src/components/pages/enterprise/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter}>
      <Helmet title="Serverless Enterprise" />
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
