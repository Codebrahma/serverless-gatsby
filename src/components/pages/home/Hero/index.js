import React from 'react'

import { Wrapper, Box } from 'serverless-design-system/src'
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
    maxWidth={1260}
  >
    <Box
      pt={['62px','62px','90px']}
      pb={1}
    >
      <HeroHeader />
      <HeroImage />
      <HeroActions />
      <HeroFooter />
    </Box>
  </Wrapper>
)

export default HomeHeroComponent