import React from 'react'

import { HeroWrapper } from 'src/fragments'
import { Flex, Box, Heading, P } from 'serverless-design-system/src'

const OverviewHero = () => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'row']} mb='400px'>
      <Flex width={[1, 1, 1/2]} justifyContent={['center', 'center', 'flex-start']}>
        <Heading.h1 fontSize={[7, 7, 8]} color='white'>
          Resources
        </Heading.h1>
      </Flex>
      <Box width={[1, 1, 1, 1/2]} px={2}>
        <P fontSize={[2, 2, 4]} color='white'>
          The serverless movement is fueled by a community of productivity-minded, user-centric developers all over the world. There are tons of ways—big and small—you can contribute and get involved.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default OverviewHero