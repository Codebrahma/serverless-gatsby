import React from 'react'

import TrustedClients from 'src/fragments/TrustedClients'
import DefaultLayout from 'src/layouts/Default'

import Content from './Content';
import Prefooter from './Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter}>
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
