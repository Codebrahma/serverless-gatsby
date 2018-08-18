import React from 'react'

import { Container, Flex, P, Heading, Box } from 'serverless-design-system/src'

import redRectangleDots from '../../../../../assets/images/redRectangleDots.png'
import investorTrinity from '../../../../../assets/images/investorTrinity.png'
import investorHeavyBit from '../../../../../assets/images/investorHeavybit.png'

const newsList = [
  { title: 'The Promise or Peril of the New Cloud Technology', publisher: `Barron's Magazine` },
  { title: `Billing by Millionths of Pennies, Cloud Computing's Giants Take in Billions`, publisher: 'New York Times' },
  { title: 'Serverless raises $3M to help developers go serverless', publisher: 'Techcrunch' },
]

// TODO: Remove hardcoded color
const NewsCard = ({ news: { title, publisher } }) => (
  <Box
    width={[1, 4/10, 3/10]}
    boxShadow='2px 2px 8px 0 #eaeaea'
    p={2}
    m={2}
    minWidth={[7/10, '300px']}
  >
    <Heading.h3 fontFamily='SoleilBk' fontSize={4}>{title}</Heading.h3>
    <P fontSize={0}>{publisher}</P>
  </Box>
)

const OurTeam= () => (
  <Container width={1} mt={8}>
    <Flex flexDirection='column' px={3}>
      <Heading.h2 fontFamily='SoleilBk' align='center'>Serverless in The news</Heading.h2>
      <Flex flexDirection={['column', 'row']} flexWrap='wrap' justifyContent='center' alignItems={['center', 'left']} mt={4}>
        {newsList.map((news, index) => <NewsCard key={index} news={news} /> )}        
      </Flex>
    </Flex>
  </Container>
)

export default OurTeam