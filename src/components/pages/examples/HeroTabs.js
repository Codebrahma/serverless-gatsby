import React from 'react'

import { HeroTabs } from 'src/fragments'
import { examples, developers } from 'src/constants/urls'

const data = [
  {
    label: 'documentation',
    value: 'documentation',
    navProps: { to: developers.documentation.framework }
  },
  {
    label: 'quick starts',
    value: 'quick-starts',
    navProps: { to: developers.quickStart.others }
  },
  {
    label: 'examples & guides',
    value: 'examples-and-guides',
    navProps: { to: examples },
  }
]

export default ({ selected }) => (
  <HeroTabs data={data} selected={selected} />
);
