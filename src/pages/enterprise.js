import React from 'react'

import { TrustedClients, Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'

import Content from 'src/components/pages/enterprise/Content'
import Prefooter from 'src/components/pages/enterprise/Prefooter'

const Enterprise = ({ location }) => {
  return (
    <DefaultLayout prefooter={Prefooter}>
      <Helmet title="Serverless Enterprise" location={location} />
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Enterprise
