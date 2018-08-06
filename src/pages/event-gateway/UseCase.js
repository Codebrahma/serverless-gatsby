import React from 'react';

import UseCases from '../../components/Fragments/Common/UseCases';
import gatewayIllustration1 from '../../assets/images/gateway-illustration1.png';
import gatewayIllustration2 from '../../assets/images/gateway-illustration2.png';
import gatewayIllustration3 from '../../assets/images/gateway-illustration3.png';

const cases = [
  {
    title: 'Simple, serverless APIs',
    description: 'Use the Event Gateway alongside with Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.',
    imgSrc: gatewayIllustration1,
  },
  {
    title: 'Subscribe functions to webhooks',
    description: 'The Event Gateway makes it dead simple to wire functions to any customer event, including webhooks',
    imgSrc: gatewayIllustration2,
  },
  {
    title: 'Multi-provider service',
    description: 'The Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.',
    imgSrc: gatewayIllustration3,
  },
];

const UseCaseWrapper = () => (
  <UseCases
    cases={cases}
    useCaseHeader="Event Gateway Use Cases"
    useCaseSubHeader="These are the 3 main use cases for Event Gateway that you should know about."
  />
);

export default UseCaseWrapper;