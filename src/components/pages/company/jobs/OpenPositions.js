import React from 'react'

import {
  Box,
  Column,
  Flex,
  Container,
  Heading,
  P,
  ResponsiveStack
} from 'serverless-design-system/src'
import { ServerlessUserGroupStack } from 'src/fragments'

const jobs = [
  {
    heading: 'Engineering',
    title: 'Full Stack Engineer',
    location: 'San Francisco        Full-time', //NEED A FIX FOR THIS.
  },
  {
    heading: 'Engineering',
    title: 'Senior Software Engineer, Open Source Tools',
    location: 'San Francisco       Full-time'
  },
  {
    heading: 'Engineering',
    title: 'Senior/Principal Engineer Distributed Systems',
    location: 'San Francisco        Full-time'
  },
  {
    heading: 'Growth',
    title: 'Growth and Brand Designer',
    location: 'San Francisco        Full-time'
  },
  {
    heading: 'Growth',
    title: 'Growth Engineer',
    location: 'San Francisco        Full-time'
  },
  {
    heading: 'Growth',
    title: 'Lead Developer Evangelist',
    location: 'San Francisco        Full-time'
  },
]

const OpenPositions = () => (
  <Container>
    <Column>
      <Flex justifyContent='center'>
        <Heading.h2 fontFamily='SoleilSb'>
          Open Positions
        </Heading.h2>
      </Flex>
      <ResponsiveStack
        flexWrap='wrap'
        justifyContent='center'
        alignItems={['center', 'left']}
      >
        <ServerlessUserGroupStack items={jobs} />
      </ResponsiveStack>
    </Column>
  </Container>
)

export default OpenPositions