import React from 'react'

import {
  Background,
  Column,
  Flex,
  Heading,
  ResponsiveStack
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { ServerlessUserGroupStack } from 'src/fragments'
import JobDetail from './JobDetail'
import backgroundImage from 'src/assets/images/rectangle-19.png'

const jobs = [
  {
    heading: 'Engineering',
    title: 'Full Stack Engineer',
    location: (<JobDetail location="San Francisco" status="Full-time" />)
  },
  {
    heading: 'Engineering',
    title: 'Senior Software Engineer, Open Source Tools',
    location: (<JobDetail location="San Francisco" status="Full-time" />)
  },
  {
    heading: 'Engineering',
    title: 'Senior/Principal Engineer Distributed Systems',
    location: (<JobDetail location="San Francisco" status="Full-time" />)
  },
  {
    heading: 'Growth',
    title: 'Growth and Brand Designer',
    location: (<JobDetail location="San Francisco" status="Full-time" />)
  },
  {
    heading: 'Growth',
    title: 'Growth Engineer',
    location: (<JobDetail location="San Francisco" status="Full-time" />)
  },
  {
    heading: 'Growth',
    title: 'Lead Developer Evangelist',
    location: (<JobDetail location="San Francisco" status="Full-time" />)
  },
]

export default () => (
  <Background backgroundImage={`url(${backgroundImage})`}>
    <AppContainer>
      <Column py={[4, 4, 7]}>
        <Flex justifyContent='center'>
          <Heading.h2 fontSize={[4, 4, 5, 6]} fontFamily='SoleilSb'>
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
  </Background>
)
