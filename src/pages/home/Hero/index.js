import React from 'react'

import { HeroWrapper } from 'src/fragments'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroFooter from './Footer'

import HomePageHeroSectionBackground from 'src/assets/images/home.png'

export default () => (
  <HeroWrapper
    backgroundImage={`url(${HomePageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <HeroHeader />
    <HeroImage />
    <HeroActions />
    <HeroFooter />
  </HeroWrapper>
)
