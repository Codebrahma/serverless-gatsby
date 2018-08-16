import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/dashboard/Hero'
import UseCase from 'src/components/pages/dashboard/UseCase'
import Features from 'src/components/pages/dashboard/Features'
import Prefooter from 'src/components/pages/dashboard/Prefooter'

const Dashboard = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCase />
    <Features />
  </DefaultLayout>
)

export default Dashboard
