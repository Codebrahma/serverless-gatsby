import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/overview/Hero'
import Explanation from 'src/components/pages/learn/overview/Explanation'
import ServerlessAppBenefits from 'src/components/pages/learn/overview/AppBenefits'
import ServerlessFrameworkBenefits from 'src/components/pages/learn/overview/FrameworkBenefits'
import GetStarted from 'src/components/pages/learn/overview/GetStarted'
import AdditionalFeatures from 'src/components/pages/learn/overview/AdditionalFeatures'

import { Divider } from 'src/fragments'

const Overview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero/>
    <Explanation />
    <GetStarted />
    <ServerlessAppBenefits />
    <ServerlessFrameworkBenefits />
    <Divider />
    <AdditionalFeatures />
  </DefaultLayout>
)

export default Overview