import React from 'react'

import { HeroWrapper } from 'src/fragments'
import Header from './Header'
import HeroImage from './HeroImage'
import Advantage from './Advantage'
import Actions from './Actions'

// This image will load by normal image tag
import DashboardPageHeroSectionBackground from 'src/assets/images/dashboard.png'

const DashboardHero = () => (
  <HeroWrapper
    backgroundImage={`url(${DashboardPageHeroSectionBackground})`}
    backgroundSize='contain'
  >
    <Header />
    <Actions />
    <HeroImage />
    <Advantage />
  </HeroWrapper>
)

export default DashboardHero