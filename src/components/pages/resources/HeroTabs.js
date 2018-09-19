import React from 'react'

import { HeroTabs } from 'src/fragments'
import { resources } from 'src/constants/urls'

const data = [
  {
    label: 'overview',
    value: 'overview',
    navProps: { to: resources.overview },
  },
  {
    label: 'blog',
    value: 'blog',
    navProps: { to: resources.blog, crossDomain: true },
  },
  {
    label: 'forum',
    value: 'forum',
    navProps: { to: resources.forum, crossDomain: true },
  },
  {
    label: 'meetups',
    value: 'meetups',
    navProps: { to: resources.meetups },
  },
  {
    label: 'slack',
    value: 'slack',
    navProps: { to: resources.slack, crossDomain: true },
  },
  {
    label: 'workshops',
    value: 'workshops',
    navProps: { to: resources.workshops },
  },
]

export default ({ selected }) => (
  <HeroTabs data={data} selected={selected} />
);
