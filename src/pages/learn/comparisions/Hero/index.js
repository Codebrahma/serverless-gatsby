import React from 'react'

import { Flex, Box, P, Heading } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'

const DashboardHero = () => (
  <HeroWrapper>
    <Flex mb='200px'>
      <Box width={[1, 1, 1/2]} pl='5%' pr={['5%', '5%', '20%']}>
        <Heading.h1 
          fontFamily='SoleilSb' 
          align={['center', 'center', 'left']} color='white'>
          Comparisions
        </Heading.h1>
      </Box>
      <Box width={[1, 1, 1/2]} pl='5%' pr={['5%', '5%', '10%']}>
        <P align={['center', 'center', 'left']} color='white'>
          Serverless Architectures are enabling a wide range of use cases, but they're not right for every situation. 
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default DashboardHero