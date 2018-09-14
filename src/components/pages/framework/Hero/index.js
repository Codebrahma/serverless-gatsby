import React from 'react'

import { HeroWrapper } from 'src/fragments'
import FrameworkPageHeroSectionBackground from 'src/assets/images/framework.png'
import Header from './Header'
import HeroImage from './HeroImage'
import Actions from './Actions'
import Advantage from './Advantage'
import CloudProviders from './CloudProviders'

const FrameworkHero = () => (
  <HeroWrapper
    backgroundImage={`url(${FrameworkPageHeroSectionBackground})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Header />
    <HeroImage />
    <Advantage />
    <Actions />
    <CloudProviders />
  </HeroWrapper>
)

export default FrameworkHero