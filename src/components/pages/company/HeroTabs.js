import React from 'react'

import { HeroTabs } from 'src/fragments'
import { company } from 'src/constants/urls'

const data = [
  {
    label: 'overview',
    value: 'overview',
    navProps: { to: company.team },
  },
  {
    label: 'jobs',
    value: 'jobs',
    navProps: { to: company.jobs },
  },
  {
    label: 'champions',
    value: 'champions',
    navProps: { to: company.champions },
  },
  {
    label: 'contact',
    value: 'contact',
    navProps: { to: company.contact, crossDomain: true }
  }
]

export default ({ selected }) => (
  <HeroTabs data={data} selected={selected} />
);
