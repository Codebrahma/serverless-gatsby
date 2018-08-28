import React from 'react'

import FooterListColumn from './Column'
import { learn } from 'src/constants/urls'

const LearnColumn = () => (
  <FooterListColumn
    header='learn'
    listItems={[
      {
        name: 'why?',
        navProps: { to: learn.why, completed: true },
      },
      {
        name: 'use cases',
        navProps: { to: learn.useCases, completed: true },
      },
      {
        name: 'comparisions',
        navProps: { to: learn.comparisons, completed: true },
      },
      {
        name: 'case studies',
        navProps: { to: learn.caseStudy, completed: true },
      },
    ]}
  />
)

export default LearnColumn