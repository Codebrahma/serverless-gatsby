import React from 'react'

import { Flex, Box, P, Heading } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'

const DashboardHero = () => (
  <HeroWrapper>
    <Flex mb='200px'>
      <Box width={1} pl='5%' pr={['5%', '5%', '20%']}>
        <Heading.h1 
          fontFamily='SoleilSb' 
          align={['center', 'center', 'left']} color='white'>
          Scaling to millions of requests with the Serverless Framework
        </Heading.h1>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default DashboardHero