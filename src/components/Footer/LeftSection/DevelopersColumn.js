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
        navProps: { to: docs, completed: false },
      },
      {
        name: 'quick starts',
        navProps: { to: quickStarts, completed: false },
      },
      {
        name: 'examples & guides',
        navProps: { to: examplesAndGuides, completed: false },
      },
    ]}
  />
)

export default DevelopersColumn