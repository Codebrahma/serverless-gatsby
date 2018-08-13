import React from 'react'

import Prefooter from 'src/components/Prefooter'

const sentences = [
  'Dig deeper into Event Gateway use cases, or check out the examples in our open source repo.',
]

const actions = [
  {
    name: 'getting started',
    navProps: {
      to: '/framework/docs/getting-started/',
      completed: false,
    },
  },
  {
    name: 'learn more',
    navProps: {
      to: '/learn/',
      completed: false,
    },
  },
  {
    name: 'examples',
    navProps: {
      to: '/framework/docs/providers/aws/examples/',
      completed: false,
    },
  },
]

const EventGatewayPrefooter = () => (
  <Prefooter
    heading='Ready to get started?'
    sentences={sentences}
    actions={actions}
  />
)

export default EventGatewayPrefooter