import React from 'react'

import { HeroWrapper } from 'src/fragments'
import DashboardPageHeroSectionBackground from 'src/assets/images/dashboard.png'
import Header from './Header'
import HeroImage from './HeroImage'
import Advantage from './Advantage'
import Actions from './Actions'

const DashboardHero = () => (
  <HeroWrapper
    backgroundImage={`url(${DashboardPageHeroSectionBackground})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Header />
    <Actions />
    <HeroImage />
    <Advantage />
  </HeroWrapper>
)

export default DashboardHero