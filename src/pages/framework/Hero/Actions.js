import React from 'react';
import { HeroActions } from 'src/fragments';

export default () => (
  <HeroActions
    firstBtn={{
      name: 'quick start',
      to: '/framework/docs/getting-started/',
      completed: false,
    }}
    secondBtn={{
      name: 'sign up',
      to: 'https://dashboard.serverless.com/',
      crossDomain: true,
      completed: false,
    }}
  />
)
