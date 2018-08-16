import React from 'react'

import { Flex, Box, P, Heading } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'

const DashboardHero = () => (
  <HeroWrapper>
    <Flex mb='100px'>
      <Box width={[1, 1, 1/2]}>
        <Heading.h1 
          fontFamily='SoleilSb'
          fontSize={8}
          align={['center', 'center', 'left']}
          color='white'
        >
          Comparisions
        </Heading.h1>
      </Box>
      <Box width={[1, 1, 1/2]}>
        <P align={['center', 'center', 'left']} color='white' fontSize={4}>
          Serverless Architectures are enabling a wide range of use cases, but they're not right for every situation. 
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default DashboardHero