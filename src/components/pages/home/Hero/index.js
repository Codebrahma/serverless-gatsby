import React from 'react'

import { Wrapper } from 'serverless-design-system/src'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroFooter from './Footer'

import HomePageHeroSectionBackground from 'src/assets/images/home.png'

const HomeHeroComponent = () => (
  <Wrapper
    backgroundImage={`url(${HomePageHeroSectionBackground})`}
    backgroundSize='contain'
    background='black'
    pt={['62px','62px','90px']}
  >
    <HeroHeader />
    <HeroImage />
    <HeroActions />
    <HeroFooter />
  </Wrapper>
)

export default HomeHeroComponent