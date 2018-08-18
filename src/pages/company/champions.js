import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/company/champions/Hero'

import Prefooter from 'src/components/pages/home/Prefooter'

const Home = () => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero />

    </DefaultLayout>
  )
}

export default Home
