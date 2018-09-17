import React from 'react'

import FooterListColumn from './Column'
import { developers } from 'src/constants/urls'

const {
  framework: docs,
  gettingStarted: quickStarts,
  examplesAndGuides,
} = developers.documentation

const DevelopersColumn = () => (
  <FooterListColumn
    header='developers'
    listItems={[
      {
        name: 'docs',
        navProps: { to: docs, completed: true },
      },
      {
        name: 'quick starts',
        navProps: { to: quickStarts, completed: true },
      },
      {
        name: 'examples & guides',
        navProps: { to: examplesAndGuides, completed: true },
      },
    ]}
  />
)

export default DevelopersColumn