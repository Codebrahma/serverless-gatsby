import React from 'react'

import Prefooter from 'src/components/Prefooter'

const sentences = [
  'Check out the docs to give the Serverless',
  'framework yourself a try',
]

const actions = [
  {
    name: 'view documentation',
    navProps: {
      to: '/framework/docs',
      completed: false,
    },
  },
]

const CaseStudyPrefooter = () => (
  <Prefooter
    heading='See For Yourself'
    sentences={sentences}
    actions={actions}
  />
)

export default CaseStudyPrefooter