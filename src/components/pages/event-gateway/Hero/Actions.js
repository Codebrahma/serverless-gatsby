import React from 'react'
import { HeroActions } from 'src/fragments'

const EventGatewayActions = () => (
  <HeroActions
    firstBtn={{
      name: 'start with framework',
      to: '/framework/docs/getting-started/',
      completed: true,
    }}
    secondBtn={{
      name: 'enterprise demo',
      to: '/enterprise/',
      completed: true,
    }}
  />
)

export default EventGatewayActions