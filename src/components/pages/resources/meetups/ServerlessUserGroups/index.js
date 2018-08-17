import React from 'react'

import { Container } from 'serverless-design-system/src'
import { ServerlessUserGroupStack } from 'src/fragments'

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
  <Container maxWidth={1} mb='400px' mt={4} px={3}>
    <ServerlessUserGroupStack items={items} />
  </Container>
)

export default ServerlessUserGroups