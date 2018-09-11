import React from 'react'

import { UseCases } from 'src/fragments'
import gatewayIllustration1 from 'src/assets/images/gateway-illustration-1.svg'
import gatewayIllustration2 from 'src/assets/images/gateway-illustration-2.svg'
import gatewayIllustration3 from 'src/assets/images/gateway-illustration-3.png'

const cases = [
  {
    title: 'Simple, serverless APIs',
    description:
      'Use the Event Gateway alongside with Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.',
    imgSrc: gatewayIllustration1,
  },
  {
    title: 'Subscribe functions to webhooks',
    description:
      'The Event Gateway makes it dead simple to wire functions to any customer event, including webhooks',
    imgSrc: gatewayIllustration2,
  },
  {
    title: 'Multi-provider service',
    description:
      'The Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.',
    imgSrc: gatewayIllustration3,
  },
]

const UseCaseWrapper = () => (
  <UseCases
    cases={cases}
    useCaseHeader='Event Gateway Use Cases'
    useCaseSubHeader='These are the 3 main use cases for Event Gateway that you should know about.'
  />
)

export default UseCaseWrapper
