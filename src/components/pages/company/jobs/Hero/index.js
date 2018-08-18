import React from 'react'

import { HeroWrapper } from 'src/fragments'
import { Flex, Box, Heading, P } from 'serverless-design-system/src'

const MeetupHero = () => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'row']} mb='100px'>
      <Flex width={[1, 1, 1/2]} justifyContent={['center', 'center', 'flex-start']} alignItems='center'>
        <Heading.h1 fontSize={[7, 7, 7, 8]} color='white' px={2}>
          Jobs
        </Heading.h1>
      </Flex>
      <Box width={[1, 1, 1, 1/2]} px={2}>
        <P fontSize={[2, 2, 4]} color='white'>
          We empower developers to do more with less. Working at Serverless means that you’ll be surrounded by team members who are passionate about democratizing the serverless movement.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default MeetupHero