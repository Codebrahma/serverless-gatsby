import React from 'react'

import Prefooter from 'src/components/Prefooter'

const sentences = [
  'To get started, pop open your terminal & run:',
  'npm install serverless -g',
]

const actions = [
  {
    name: 'documentation',
    navProps: {
      to: '/framework/docs',
      completed: false,
    },
  },
  {
    name: 'serverless example',
    navProps: {
      to: '/framework/docs/providers/aws/examples/',
      completed: false,
    },
  },
  {
    name: 'github repo',
    navProps: {
      to: 'https://github.com/serverless/serverless',
      crossDomain: true,
      completed: false,
    },
  },
]

const DashboardPrefooter = () => (
  <Prefooter
    heading='New to serverless?'
    sentences={sentences}
    actions={actions}
  />
)

export default DashboardPrefooter