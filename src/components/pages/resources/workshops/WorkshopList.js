import React from 'react'

import { Flex, Box, Heading, P, SecondaryButton, Container } from 'serverless-design-system/src'
import resourceWorkshopSanFrancisco from '../../../../assets/images/resourceWorkshopSanFrancisco.png'

const workshopList = [
  {
    title: 'SanFrancisco',
    cost: '$1095/person',
    img: resourceWorkshopSanFrancisco,
    isAvailable: false,
  },
  {
    title: 'Seattle',
    cost: '$1095/person',
    img: resourceWorkshopSanFrancisco,
    isAvailable: false,
  },
  {
    title: 'New York',
    cost: '$1095/person',
    img: resourceWorkshopSanFrancisco,
    isAvailable: false,
  },
  {
    title: 'Atlanta',
    cost: '$1095/person',
    img: resourceWorkshopSanFrancisco,
    isAvailable: false,
  },
  {
    title: 'London',
    cost: '$1095/person',
    img: resourceWorkshopSanFrancisco,
    isAvailable: false,
  },
  {
    title: 'Private Workshop',
    cost: '$1095/person',
    img: resourceWorkshopSanFrancisco,
    isAvailable: true,
  },
]

const WorkshopListItem = ({ title, cost, img, isAvailable }) => (
  <Flex.column
    background={`url(${resourceWorkshopSanFrancisco})`}
    minHeight='400px'
    maxWidth='384px'
    justifyContent='space-between'
    px={4}
    py={4}
    mr={2}
    mt='100px'
  >
    <Box>
      <Heading.h2 fontFamily='SoleilSb' mb={1} color='white' fontSize={5}>
        {title}
      </Heading.h2>
      <Heading.h5 fontFamily='SoleilSb' color='white' fontSize={1}>
        {cost}
      </Heading.h5>
    </Box>
    <Flex.column alignItems='flex-end'>
    {
      isAvailable ? (
        <P fontSize={0} color='white'>We’ll work with you privately in a one on one session to empower your team with serverless knowledge. </P>
      ) : (
        <P fontSize={0} color='white'>Dates for this workshop have not been finalized. Join the waitlist to get notified as soon as the dates are set.</P>
      )
    }
    <SecondaryButton background='white' width={1}>
      {isAvailable ? 'contact us' : 'join waitlist'}
    </SecondaryButton>
    </Flex.column>
  </Flex.column>
)

const WorkshopList = () => (
  <Container maxWidth={1}>
    <Flex flexDirection={['column', 'column', 'row']} mb='400px' flexWrap='wrap'>
      {
        workshopList.map(({ title, cost, img, isAvailable }) => (
          <WorkshopListItem
            key={title}
            title={title}
            cost={cost}
            img={img}
            isAvailable={isAvailable}
          />
        ))
      }
    </Flex>
  </Container>
)

export default WorkshopList