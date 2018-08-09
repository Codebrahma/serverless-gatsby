import React from 'react';
import HeroActions from '../../../components/Fragments/Common/HeroActions';

export default () => (
  <HeroActions
    firstBtn={{
      name: 'sign up',
      to: 'https://dashboard.serverless.com/',
      crossDomain: true,
      completed: false,
    }}
    secondBtn={{
      name: 'contact sales',
      to: '/enterprise/',
      completed: false,
    }}
  />
);
