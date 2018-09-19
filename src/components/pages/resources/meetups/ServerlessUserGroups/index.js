import React from 'react'
import { Background, Box, Heading } from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { ServerlessUserGroupStack } from 'src/fragments'
import dotsBackground from 'src/assets/images/dots-background.png'

const items = [
  {
    title: 'Triangle Serverless',
    location: 'Raleigh, NC',
    link: 'https://meetup.com/TriangleServerless'
  },
  {
    title: 'Serverless New York City',
    location: 'New York City, NY',
    link: 'https://meetup.com/New-York-City-Serverless-Architecture-Meetup',
  },
  {
    title: 'Serverless Toronto',
    location: 'Toronto, ON',
    link: 'https://meetup.com/Serverless-Toronto',
  },
  {
    title: 'Serverless - Metro Detroit',
    location: 'Detroit, MI',
    link: 'https://meetup.com/Serverless-Detroit',
  },
  {
    title: 'Serverless Atlanta',
    location: 'Atlanta, GA',
    link: 'https://meetup.com/Serverless-Atlanta',
  },
  {
    title: 'Serverless Minneapolis',
    location: 'Minneapolis',
    link: 'https://meetup.com/Serverless-Minneapolis',
  },
  {
    title: 'Serverless LA',
    location: 'Los Angeles, CA',
    link: 'https://meetup.com/Serverless-LA',
  },
  {
    title: 'Serverless Sacramento',
    location: 'Sacramento, CA',
    link: 'https://meetup.com/Sacramento-Serverless-Meetup',
  },
  {
    title: 'Serverless Vancouver',
    location: 'Vancouver, BC',
    link: 'https://meetup.com/Serverless-Vancouver',
  },
  {
    title: 'Serverless',
    location: 'San Francisco, CA',
    link: 'https://meetup.com/Serverless',
  },
  {
    title: 'Serverless Cork',
    location: 'Cork, Ireland',
    link: 'https://meetup.com/Serverless-Cork',
  },
  {
    title: 'Serverless London',
    location: 'London, United Kingdom',
    link: 'https://meetup.com/Serverless-London',
  },
  {
    title: 'Serverless Berlin',
    location: 'Berlin, Germany',
    link: 'https://meetup.com/Serverless-Berlin',
  },
  {
    title: 'Serverless Italy',
    location: 'Milano, MI',
    link: 'https://meetup.com/Serverless-Italy',
  },
  {
    title: 'Serverless User Group Poland',
    location: 'Warsaw, Poland',
    link: 'https://meetup.com/ServerlessUGPL',
  },
  {
    title: 'Serverless Moscow',
    location: 'Moscow, Russia',
    link: 'https://meetup.com/moscow-serverless',
  },
  {
    title: 'Serverless Turkey',
    location: 'Istanbul, Turkey',
    link: 'https://meetup.com/Serverless-Turkey',
  },
  {
    title: 'Serverless (Function As a Service) - Pune',
    location: 'Raleigh, NC',
    link: 'https://meetup.com/Serverless-Pune',
  },
  {
    title: 'Serverless Sri Lanka',
    location: 'Colombo, Sri Lanka',
    link: 'https://meetup.com/Serverless-Sri-Lanka',
  },
]

const ServerlessUserGroups = () => (
  <Background
    background={`url(${dotsBackground})`}
    backgroundSize="cover"
  >
    <AppContainer>
      <Box pb={[300, 300, 13]}>
        <Heading.h4
          fontFamily="SoleilBk"
          fontSize={[4, 4, 5]}
          pt={5}
          pb={2}
          align="center"
        >
          Serverless User Groups
        </Heading.h4>
        <ServerlessUserGroupStack items={items} />
      </Box>
    </AppContainer>
  </Background>
)

export default ServerlessUserGroups