import React from 'react'

import { HeroWrapper } from 'src/fragments'
import { Flex, Box, Heading, P } from 'serverless-design-system/src'

const WorkShopsHero = () => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'row']} mb='100px'>
      <Flex width={[1, 1, 1/2]} justifyContent={['center', 'center', 'flex-start']} alignItems='center'>
        <Heading.h1 fontSize={[7, 7, 7, 8]} color='white' px={2}>
          Workshops
        </Heading.h1>
      </Flex>
      <Box width={[1, 1, 1, 1/2]} px={2}>
        <P fontSize={[2, 2, 4]} color='white'>
          Serverless Developer Workshops are a full day focused on training for serverless development. Learn about testing, security and operations. These workshops will empower developers and technology leaders to operationalize serverless across their organization.
        </P>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default WorkShopsHero