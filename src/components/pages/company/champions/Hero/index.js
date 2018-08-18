import React from 'react'

import { HeroWrapper } from 'src/fragments'
import { Flex, Box, Heading, P } from 'serverless-design-system/src'

const MeetupHero = () => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'row']} mb='100px'>
      <Flex width={[1, 1, 1/2]} justifyContent={['center', 'center', 'flex-start']} alignItems='center'>
        <Heading.h1 fontSize={[7, 7, 7, 8]} color='white' px={2} fontFamily='Soleil'>
          Champions
        </Heading.h1>
      </Flex>
      <Box width={[1, 1, 1, 1/2]} px={2}>
        <P fontSize={[2, 2, 4]} color='white' fontFamily='SoleilSt'>
          At Serverless, we value open source. We are incredibly proud of the way the Serverless community steps up to the plate on a daily basis to contribute to the project and help guide newcomers.
        </P>
        <P fontSize={[2, 2, 4]} color='white' fontFamily='SoleilSt'>
          To recognize our community superstars, we established The Serverless Champions program.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default MeetupHero