import React from 'react';

import {
  Flex,
} from 'serverless-design-system/src';

import HeroAdvantage from '../../../components/Fragments/Common/HeroAdvantage';

const advantages = [
  { title: 'Simplify API development', description: 'Simplify API The Event Gateway is the simplest developer experience for wiring Serverless functions to http endpoints.' },
  { title: 'React to custom events', description: 'Expand your Serverless use-cases by reacting to any custom event with Serverless functions.'},
  { title: 'Vendor Choice', description: 'The Event Gateway is open source and cloud agnostic, allowing for more choice and flexibility.'},
];

const Advantages = () => (
  <Flex flexDirection={['column', 'column', 'row']} flexWrap="wrap">
    {
      advantages.map(({ title, description }) => (
        <HeroAdvantage 
          key={title} 
          title={title} 
          description={description} 
        />
      ))
    }
  </Flex>
)

export default Advantages;