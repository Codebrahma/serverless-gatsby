import React from 'react';

import { UseCases } from 'src/fragments';
import ImageContextHOC from '../../components/ImageContextHOC';

const cases = (useCase1, useCase2, useCase3) => [
  {
    title: 'Simple, serverless APIs',
    description: 'Use the Event Gateway alongside with Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.',
    imgSrc: useCase1,
  },
  {
    title: 'Subscribe functions to webhooks',
    description: 'The Event Gateway makes it dead simple to wire functions to any customer event, including webhooks',
    imgSrc: useCase2,
  },
  {
    title: 'Multi-provider service',
    description: 'The Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.',
    imgSrc: useCase3,
  },
];

const UseCaseWrapper = ({ useCase1, useCase2, useCase3 }) => (
  <UseCases
    cases={cases(useCase1, useCase2, useCase3)}
    useCaseHeader="Event Gateway Use Cases"
    useCaseSubHeader="These are the 3 main use cases for Event Gateway that you should know about."
  />
);

export default ImageContextHOC(UseCaseWrapper, ['useCase1', 'useCase2', 'useCase3']);