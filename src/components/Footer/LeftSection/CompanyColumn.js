import React from 'react'

import FooterListColumn from './Column'
import { company } from 'src/constants/urls'

export default () => (
  <FooterListColumn
    header="company"
    listItems={[
      {
        name: 'team',
        navProps: { to: company.team, completed: false },
      },
      {
        name: 'jobs',
        navProps: { to: company.jobs, crossDomain: true },
      },
      {
        name: 'champions',
        navProps: { to: company.champions, completed: false },
      },
      {
        name: 'contacts',
        navProps: { to: company.contact, crossDomain: true },
      },
    ]}
  />
)
