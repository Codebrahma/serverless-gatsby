import React from 'react'

import { Container, Flex, Box, TextWithIcon, Heading, P } from 'serverless-design-system/src'

import redRectangleDots from '../../../../../assets/images/redRectangleDots.png'

const serverlessChampions = [
  'Heroes in the serverless community',
  'Big evangelists of Serverless projects',
  'Though leaders in an enterprise cheering serverless',
  'Major contributors to open-source serverless projects',
  'Proactive at answering community questions and resolving issues',
  'Speakers at serverless conferences and meetups',
  'Builders of serverless projects, and teachers for those who are learning',
]

const memberReceivals = [
  'Limited-edition t-shirt and jacket with Serverless champion insignia',
  'Special recognition post on the Serverless.com blog',
  'Showcase on the Serverless Champions page with exclusive interview',
  'Serverless Champion sticker and digital badges',
  'Invitation to the Serverless Champions Slack channel',
  'Early product announcements and invitations to alpha/beta releases',
]

// TODO: SDS should have withespace property
const HowToBeChampion = () => (
  <Container width={1} mt={6} mb='400px'>
    <Flex.column px={3}>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight='32px'
        iconWidth='50px'
        iconTop='10px'
        iconLeft='-10px'
      >
        <Heading.h1>What does it take to become a Serverless Champion?</Heading.h1>
      </TextWithIcon>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 1/2]} px={2}>
          <Heading.h4>Our Serverless Champions are</Heading.h4>
          {serverlessChampions.map(champion => <P key={champion} mt={3}>{champion}</P>)}
        </Box>
        <Flex justifyContent='flex-end' width={[1, 1, 0.5]}>
          <Box width={[1, 1, 9/10, 8/10, 7/10]} boxShadow='2px 2px 8px 0 #eaeaea' border='1px solid #eaeaea' px={4} py={3}>
            <Heading.h4 fontSize={3} fontFamily='SoleilBk'>Our Benefits</Heading.h4>
            {memberReceivals.map((receival, index) => <P key={index} mt={4} fontFamily='Soleilbk'>{receival}</P>)}
          </Box>
        </Flex>
      </Flex>
    </Flex.column>
  </Container>
)

export default HowToBeChampion