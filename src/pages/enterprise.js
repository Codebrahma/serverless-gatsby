import React from 'react'

import TrustedClients from 'src/fragments/TrustedClients'
import DefaultLayout from 'src/layouts/Default'

import Content from 'src/components/pages/enterprise/Content';
import Prefooter from 'src/components/pages/enterprise/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter}>
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
