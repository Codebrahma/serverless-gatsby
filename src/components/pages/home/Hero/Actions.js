import React from 'react'

import { HeroActions } from 'src/fragments'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'sign up',
      to: 'https://dashboard.serverless.com/',
      crossDomain: true,
      completed: false,
    }}
    secondBtn={{
      name: 'enterprise demo',
      to: '/enterprise/',
      completed: false,
    }}
  />
)

export default HomeActions