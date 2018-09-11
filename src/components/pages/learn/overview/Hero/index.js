import React from 'react'

import { Box, Flex } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import Description from './Description'
import Actions from './Actions'
import HeroTabs from '../../HeroTabs'
import LearnOverviewBg from 'src/assets/images/learnOverviewBg.png'

const DashboardHero = () => (
  <HeroWrapper
    background={`black url(${LearnOverviewBg})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Box mb={[2, 2, 6]}>
      <HeroTabs selected="overview" />
    </Box>

    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent="space-between"
      mb={[2, 2, 4, 6]}
    >
      <Description />
      <Actions />
    </Flex>
  </HeroWrapper>
)

export default DashboardHero