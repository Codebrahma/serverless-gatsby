import React from 'react'

import { Box, Flex } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import Description from './Description'
import Actions from './Actions'
import HeroTabs from '../../HeroTabs'
import LearnOverviewBg from 'src/assets/images/learnOverviewBg.png'

const DashboardHero = () => (
  <HeroWrapper
    backgroundImage={`url(${LearnOverviewBg})`}
    backgroundSize='contain'
  >
    <Box px={[3, 3, 2]}>
      <Box mb={[2, 2, 5]}>
        <HeroTabs />
      </Box>

      <Flex
        flexDirection={['column', 'column', 'row']}
        mb={[5, 5, 6]}
      >
        <Description />
        <Actions />
      </Flex>
    </Box>
  </HeroWrapper>
)

export default DashboardHero