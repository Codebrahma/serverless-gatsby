import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/overview/Hero'
import Explanation from 'src/components/pages/learn/overview/Explanation'
import ServerlessAppBenefits from 'src/components/pages/learn/overview/AppBenefits'
import ServerlessFrameworkBenefits from 'src/components/pages/learn/overview/FrameworkBenefits'
import GetStarted from 'src/components/pages/learn/overview/GetStarted'

import { Divider } from 'src/fragments'

const Overview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero/>
    <Explanation />
    <GetStarted />
    <ServerlessAppBenefits />
    <Divider />
    <ServerlessFrameworkBenefits/>
  </DefaultLayout>
)

export default Overview