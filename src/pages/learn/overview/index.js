import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import UseCase from './UseCase'
import ServerlessAppBenefits from './ServerlessAppBenefits'
import ServerlessFrameworkBenefits from './ServerlessFrameworkBenefits'
import AboutServerlessFramework from './AboutServerlessFramework'
import GetStarted from './GetStarterd'

const Overview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero/>
    <UseCase />
    <GetStarted />
    <ServerlessAppBenefits />
    <AboutServerlessFramework />
    <ServerlessFrameworkBenefits/>
  </DefaultLayout>
)

export default Overview