import React from 'react'

import {
  Column,
  Flex,
  Heading,
  ResponsiveStack
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
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
  <AppContainer>
    <Column my={5}>
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
  </AppContainer>
)

export default OpenPositions