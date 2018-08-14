import React from 'react'

import { Flex, Box } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroLeftSection from './LeftSection'
import HeroRightSection from './RightSection'
import LearnOverviewBg from '../../../../assets/images/learnOverviewBg.png'

const DashboardHero = () => (
  <HeroWrapper
    backgroundImage={`url(${LearnOverviewBg})`}
    backgroundSize='contain'
  >
    <Flex flexDirection={['column', 'column', 'row']} mb='200px'>
      <HeroLeftSection />
      <HeroRightSection />
    </Flex>
  </HeroWrapper>
)

export default DashboardHero