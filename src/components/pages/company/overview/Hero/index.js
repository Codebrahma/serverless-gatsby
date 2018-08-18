import React from 'react'

import { HeroWrapper } from 'src/fragments'
import { Flex, Box, Heading, P } from 'serverless-design-system/src'

const MeetupHero = () => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'row']} mb='100px'>
      <Flex width={[1, 1, 1/2]} justifyContent={['center', 'center', 'flex-start']} alignItems='center'>
        <Heading.h1 fontSize={[7, 7, 7, 8]} color='white' px={2}>
          Company
        </Heading.h1>
      </Flex>
      <Box width={[1, 1, 1, 1/2]} px={2}>
        <P fontSize={[2, 2, 4]} color='white'>
          We envision a world where developers can easily scale their cloud infrastructure on any platform from any device. At Serverless we are creating the tools for that.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default MeetupHero