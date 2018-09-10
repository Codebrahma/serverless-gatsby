import React from 'react'

import { HeroWrapper } from 'src/fragments'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroFooter from './Footer'

import HomePageHeroSectionBackground from 'src/assets/images/home.png'

const HomeHeroComponent = () => (
  <HeroWrapper
    backgroundImage={`url(${HomePageHeroSectionBackground})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <HeroHeader />
    <HeroImage />
    <HeroActions />
    <HeroFooter />
  </HeroWrapper>
)

export default HomeHeroComponent