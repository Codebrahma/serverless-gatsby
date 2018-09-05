import React from 'react'

import FooterListColumn from './Column'
import { company } from 'src/constants/urls'

const CompanyColumn = () => (
  <FooterListColumn
    header='company'
    listItems={[
      {
        name: 'team',
        navProps: { to: company.team, completed: true },
      },
      {
        name: 'jobs',
        navProps: { to: company.jobs, completed: true },
      },
      {
        name: 'champions',
        navProps: { to: company.champions, completed: true },
      },
      {
        name: 'contacts',
        navProps: { to: company.contact, crossDomain: true },
      },
    ]}
  />
)

export default CompanyColumn

