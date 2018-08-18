import React from 'react'

import { Box, Flex, Container, Heading, P } from 'serverless-design-system/src'

const jobs = [
  { type: 'Engineering', title: 'Full Stack Engineer', location: 'San Francisco', duration: 'Full-time' },
  { type: 'Engineering', title: 'Senior Software Engineer, Open Source Tools', location: 'San Francisco', duration: 'Full-time' },
  { type: 'Engineering', title: 'Senior/Principal Engineer Distributed Systems', location: 'San Francisco', duration: 'Full-time' },
  { type: 'Growth', title: 'Growth and Brand Designer', location: 'San Francisco', duration: 'Full-time' },
  { type: 'Growth', title: 'Growth Engineer', location: 'San Francisco', duration: 'Full-time' },
  { type: 'Growth', title: 'Lead Developer Evangelist', location: 'San Francisco', duration: 'Full-time' },
]

// TODO: Remove hardcoded color
const OpenPositionCard = ({ type, title, location, duration }) => (
  <Flex.column
    width={[1, 4/10, 3/10]}
    boxShadow='2px 2px 8px 0 #eaeaea'
    p={2}
    m={2}
    minWidth={[7/10, '300px']}
    alignItems='flex-start'
  >
    <P fontSize={0}>{type}</P>
    <Heading.h3 fontFamily='SoleilBk' fontSize={4}>{title}</Heading.h3>
    <Flex justifyContent='space-between' width={1}>
      <P fontSize={0}>{location}</P>
      <P fontSize={0}>{duration}</P>
    </Flex>
  </Flex.column>
)


const OpenPositions = () => (
  <Container maxWidth={1} mt={8}>
    <Flex.column>
      <Flex justifyContent='center'>
        <Heading.h3 fontFamily='SoleilSb'>Open Positions</Heading.h3>
      </Flex>
      <Flex flexDirection={['column', 'column', 'row']} flexWrap='wrap' justifyContent='center' alignItems={['center', 'left']}>
        {jobs.map(({ type, title, location, duration }) => <OpenPositionCard key={type} type={type} title={title} location={location} duration={duration} />)}
      </Flex>
    </Flex.column>
  </Container>
)

export default OpenPositions