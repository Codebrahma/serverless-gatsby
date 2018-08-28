import React from 'react'

import Prefooter from 'src/components/Prefooter'

const sentences = [
  `Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.`,
  `Or if you’re ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.`
]

const actions = [
  {
    name: 'use cases',
    navProps: {
      to: '/framework/docs',
      completed: false,
    },
  },
  {
    name: 'comparisons',
    navProps: {
      to: '/framework/docs/providers/aws/examples/',
      completed: false,
    },
  },
  {
    name: 'case studies',
    navProps: {
      to: 'https://github.com/serverless/serverless',
      crossDomain: true,
      completed: false,
    },
  },
]

const OverviewPrefooter = () => (
  <Prefooter
    heading='Next Steps'
    sentences={sentences}
    actions={actions}
  />
)

export default OverviewPrefooter