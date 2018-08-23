import React from 'react'

import { Flex } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroLeftSection from './LeftSection'
import HeroRightSection from './RightSection'
import LearnOverviewBg from '../../../../../assets/images/learnOverviewBg.png'

const DashboardHero = () => (
  <HeroWrapper
    backgroundImage={`url(${LearnOverviewBg})`}
    backgroundSize='contain'
  >
    <Flex
      flexDirection={['column', 'column', 'row']}
      mb={[5, 5, 6, 9]}
      px={[3, 3, 2]}
    >
      <HeroLeftSection />
      <HeroRightSection />
    </Flex>
  </HeroWrapper>
)

export default DashboardHero