import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/dashboard/Hero'
import UseCase from 'src/components/pages/dashboard/UseCase'
import Features from 'src/components/pages/dashboard/Features'
import Prefooter from 'src/components/pages/dashboard/Prefooter'
import { Divider, Helmet } from 'src/fragments'

const Dashboard = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title="Dashboard"
      description="The Serverless Dashboard is the operations console for your Serverless architecture. Everything you need to onboard teams and move fast, safely."
      location={location}
    />
    <Hero />
    <UseCase />
    <Divider />
    <Features />
  </DefaultLayout>
)

export default Dashboard
