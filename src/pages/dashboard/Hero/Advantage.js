import React from 'react';

import { ResponsiveStack } from 'serverless-design-system/src';

import HeroAdvantage from '../../../fragments/HeroAdvantage';

const advantages = [
  { title: 'Visualize Your Applications', description: 'The Serverless Dashboard gives your team a shared overview of the functions, events, and subscriptions that make up your serverless application.' },
  { title: 'Streamline Development', description: 'View your application logs and metrics from within the UI to ease debugging and increase velocity.', },
  { title: 'Collaborate & Manage Access', description: 'Control your security and compliance needs by managing which team members have access to which cloud resources.' },
];

const Advantages = () => (
  <ResponsiveStack flexWrap="wrap">
    {
      advantages.map(({ title, description }) => (
        <HeroAdvantage
          key={title}
          title={title}
          description={description}
        />
      ))
    }
  </ResponsiveStack>
)

export default Advantages;