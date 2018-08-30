import React from 'react'

import FooterListColumn from './Column'
import { resources } from 'src/constants/urls'

const ResourceColumn = () => (
  <FooterListColumn
    header='resources'
    listItems={[
      {
        name: 'overview',
        navProps: { to: resources.overview, completed: true },
      },
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
        navProps: { to: resources.meetups, completed: true },
      },
      {
        name: 'slack',
        navProps: { to: resources.slack, crossDomain: true },
      },
      {
        name: 'workshops',
        navProps: { to: resources.workshops, completed: true },
      },
    ]}
  />
)

export default ResourceColumn