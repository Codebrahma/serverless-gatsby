import React from 'react'

import TrustedClients from 'src/fragments/TrustedClients'
import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
