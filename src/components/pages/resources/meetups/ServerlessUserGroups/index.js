import React from 'react'
import { Background, Box, Heading } from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { ServerlessUserGroupStack } from 'src/fragments'
import dotsBackground from 'src/assets/images/dots-background.png'

const items = [
  { title: 'Triangle Serverless', location: 'Raleigh, NC' },
  { title: 'Serverless New York City', location: 'New York City, NY' },
  { title: 'Serverless Toronto', location: 'Toronto, ON' },
  { title: 'Serverless - Metro Detroit', location: 'Detroit, MI' },
  { title: 'Serverless Atlanta', location: 'Atlanta, GA' },
  { title: 'Serverless Minneapolis', location: 'Minneapolis' },
  { title: 'Serverless LA', location: 'Los Angeles, CA' },
  { title: 'Serverless Sacramento', location: 'Sacramento, CA' },
  { title: 'Serverless Vancouver', location: 'Vancouver, BC' },
  { title: 'Serverless', location: 'San Francisco, CA' },
  { title: 'Serverless Cork', location: 'Cork, Ireland' },
  { title: 'Serverless London', location: 'London, United Kingdom' },
  { title: 'Serverless Berlin', location: 'Berlin, Germany' },
  { title: 'Serverless Italy', location: 'Milano, MI' },
  { title: 'Serverless User Group Poland', location: 'Warsaw, Poland' },
  { title: 'Serverless Moscow', location: 'Moscow, Russia' },
  { title: 'Serverless Turkey', location: 'Istanbul, Turkey' },
  { title: 'Serverless (Function As a Service) - Pune', location: 'Raleigh, NC' },
  { title: 'Serverless Sri Lanka', location: 'Colombo, Sri Lanka' },
]

const ServerlessUserGroups = () => (
  <Background
    background={`url(${dotsBackground})`}
    backgroundSize="cover"
  >
    <AppContainer>
      <Box pb={13}>
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