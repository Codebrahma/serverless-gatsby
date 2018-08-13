import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from './Hero'
import UseCase from './UseCase'
import Features from './Features'
import Prefooter from './Prefooter'

const Dashboard = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCase />
    <Features />
  </DefaultLayout>
)

export default Dashboard
