import React from 'react'

import FooterListColumn from './Column'
import { learn } from 'src/constants/urls'

const LearnColumn = () => (
  <FooterListColumn
    header='learn'
    listItems={[
      {
        name: 'why?',
        navProps: { to: learn.why, completed: false },
      },
      {
        name: 'use cases',
        navProps: { to: learn.useCases, completed: false },
      },
      {
        name: 'comparisions',
        navProps: { to: learn.comparisions, completed: false },
      },
    ]}
  />
)

export default LearnColumn