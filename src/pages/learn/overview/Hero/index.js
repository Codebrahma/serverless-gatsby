import React from 'react'

import { Box } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'

import DashboardPageHeroSectionBackground from 'src/assets/images/dashboard.png'

const DashboardHero = () => (
  <HeroWrapper
    backgroundImage={`url(${DashboardPageHeroSectionBackground})`}
    backgroundSize='contain'
  >
  <Box mt={3}>Hello</Box>
  <Box mt={3}>Hello</Box>
  <Box mt={3}>Hello</Box>
  <Box mt={3}>Hello</Box>
  <Box mt={3}>Hello</Box>

  </HeroWrapper>
)

export default DashboardHero