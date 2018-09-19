import React from 'react'

import { UseCases } from 'src/fragments'
import scaleableAPI from 'src/assets/images/scalableAPI.svg'
import dataProcessing from 'src/assets/images/dataProcessing.svg'
import easyAutomation from 'src/assets/images/easyAutomation.svg'

const cases = [
  {
    title: 'Simple, scaleable APIs',
    description:
      'The Serverless Framework provides a simple way to develop infinitely scaleable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live. With native support for AWS API Gatewway, Event Gateway, and more you can utilize the tools you know and trust with a single experience.',
    imgSrc: scaleableAPI,
  },
  {
    title: 'Easy Automation',
    description:
      'The Serverless Framework makes automating anything quick and easy. Simply subscribe a function to the event and let the framework take care of the rest.',
    imgSrc: easyAutomation,
  },
  {
    title: 'Data Processing',
    description:
      'Transforming data and building data pipelines and has never been easier.',
    imgSrc: dataProcessing,
  },
]

const UseCaseWrapper = () => (
  <UseCases
    cases={cases}
    useCaseHeader='Serverless Framework Use Cases'
    useCaseSubHeader='These are the 3 main use cases for the Serverless Framework that you should know about.'
  />
)

export default UseCaseWrapper
