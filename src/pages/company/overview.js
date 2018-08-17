import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/company/Hero'

import OurStory from 'src/components/pages/company/OurStory'
import OurTeam from 'src/components/pages/company/OurTeam'
import OurInvestors from 'src/components/pages/company/OurInvestors'
import ServerlessNews from 'src/components/pages/company/ServerlessNews'
import ContactUs from 'src/components/pages/company/ContactUs'

import Prefooter from 'src/components/pages/home/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero />
      <OurStory />
      <OurTeam />
      <OurInvestors />
      <ServerlessNews />
      <ContactUs />
    </DefaultLayout>
  )
}

export default Home
