import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/overview/Hero'
import Explanation from 'src/components/pages/learn/overview/Explanation'
import ServerlessAppBenefits from 'src/components/pages/learn/overview/AppBenefits'
import ServerlessFrameworkBenefits from 'src/components/pages/learn/overview/FrameworkBenefits'
import GetStarted from 'src/components/pages/learn/overview/GetStarted'
import AdditionalFeatures from 'src/components/pages/learn/overview/AdditionalFeatures'
import { Divider, Helmet } from 'src/fragments'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title="Why Serverless?"
      description="What is the Serverless movement about and why does it matter?"
      location={location}
    />
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