import React from 'react'

import {
  Background,
  Column,
  P,
  Heading,
  Box
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { ServerlessUserGroupStack } from 'src/fragments'
import dotsBackground from 'src/assets/images/dots-background.png'

const newsList = [
  { title: 'The Promise or Peril of the New Cloud Technology', location: `Barron's Magazine` },
  { title: `Billing by Millionths of Pennies, Cloud Computing's Giants Take in Billions`, location: 'New York Times' },
  { title: 'Serverless raises $3M to help developers go serverless', location: 'Techcrunch' },
]

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
  <AppContainer>
    <Background
      background={`url(${dotsBackground})`}
      backgroundSize="cover"
    >
      <Column py={5}>
        <Heading.h2 fontFamily='SoleilBk' align='center'>
          Serverless In The News
        </Heading.h2>
        <ServerlessUserGroupStack items={newsList} />
      </Column>
    </Background>
  </AppContainer>
)

export default OurTeam