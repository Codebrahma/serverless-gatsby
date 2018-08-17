import React from 'react'

import { HeroWrapper } from 'src/fragments'
import { Flex, Box, Heading, P } from 'serverless-design-system/src'

const MeetupHero = () => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'row']} mb='100px'>
      <Flex width={[1, 1, 1/2]} justifyContent={['center', 'center', 'flex-start']} alignItems='center'>
        <Heading.h1 fontSize={[7, 7, 7, 8]} color='white' px={2}>
          Meetups
        </Heading.h1>
      </Flex>
      <Box width={[1, 1, 1, 1/2]} px={2}>
        <P fontSize={[2, 2, 4]} color='white'>
          Serverless meetups are hosted locally in cities all over the world. Meetups are a great chance to meet other serverless pros and learn more about the technology.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default MeetupHero