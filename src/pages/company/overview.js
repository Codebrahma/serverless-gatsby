import React from 'react'

import { Divider } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/company/overview/Hero'
import OurStory from 'src/components/pages/company/overview/OurStory'
import OurTeam from 'src/components/pages/company/overview/OurTeam'
import OurInvestors from 'src/components/pages/company/overview/OurInvestors'
import ServerlessNews from 'src/components/pages/company/overview/ServerlessNews'
import ContactUs from 'src/components/pages/company/overview/ContactUs'

import Prefooter from 'src/components/pages/home/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero />
      <OurStory />
      <OurTeam />
      <Divider />
      <OurInvestors />
      <ServerlessNews />
      <ContactUs />
    </DefaultLayout>
  )
}

export default Home
