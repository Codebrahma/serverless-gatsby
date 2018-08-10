import React from 'react'

import Prefooter from 'src/components/Prefooter'

const sentences = [
  'Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.',
  "Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.",
]

const actions = [
  { name: 'use cases', navProps: { to: '/learn/use-cases', completed: false } },
  {
    name: 'comparisions',
    navProps: { to: '/learn/comparisions', completed: false },
  },
]

export default () => (
  <Prefooter heading='Next Steps' sentences={sentences} actions={actions} />
)
