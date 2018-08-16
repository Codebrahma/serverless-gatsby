import React from 'react'

import { Flex, Box, P, Heading } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'

const UseCasesHero = () => (
  <HeroWrapper>
    <Flex mb='100px' flexDirection={['column', 'column', 'row']}>
      <Box width={[1, 1, 1/2]}>
        <Heading.h1 
          fontFamily='SoleilSb' 
          align={['center', 'center', 'left']}
          color='white'
          fontSize={[7, 7, 8]}
        >
          Use Cases
        </Heading.h1>
      </Box>
      <Box width={[1, 1, 1/2]} pl='3%' pr={['5%', '5%', '5%']}>
        <P align={['center', 'center', 'left']} color='white' fontSize={[2, 2, 4]}>
          More and more developers are moving to Serverless as a way to increase velocity and decrease monotony.
        </P>
        <P align={['center', 'center', 'left']} color='white' fontSize={[2, 2, 4]}>
          Here we describe some core use cases for serverless, though we encourage you to think beyond them. Serverless is incredibly flexible and can be used to address a wide variety of application problems. It is also extensible, making it easy to build in use cases that are not currently supported.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default UseCasesHero