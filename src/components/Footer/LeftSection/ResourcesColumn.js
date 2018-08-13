import React from 'react'

import FooterListColumn from './Column'
import { resources } from 'src/constants/urls'

const ResourceColumn = () => (
  <FooterListColumn
    header='resources'
    listItems={[
      {
        name: 'blog',
        navProps: { to: resources.blog, completed: true },
      },
      {
        name: 'forum',
        navProps: { to: resources.forum, crossDomain: true },
      },
      {
        name: 'meetups',
        navProps: { to: resources.meetups, completed: false },
      },
      {
        name: 'slack',
        navProps: { to: resources.slack, crossDomain: true },
      },
      {
        name: 'workshops',
        navProps: { to: resources.workshops, completed: false },
      },
    ]}
  />
)

export default ResourceColumn