import React from 'react'

import FooterListColumn from './Column'
import { platform, enterprise } from 'src/constants/urls'

const PlatformColumn = () => (
  <FooterListColumn
    header='platform'
    listItems={[
      {
        name: 'framework',
        navProps: { to: platform.framework, completed: true },
      },
      {
        name: 'dashboard',
        navProps: { to: platform.dashboard, completed: true },
      },
      {
        name: 'event gateway',
        navProps: { to: platform.eventGateway, completed: true },
      },
      {
        name: 'enterprise',
        navProps: { to: enterprise, completed: true },
      },
    ]}
  />
)

export default PlatformColumn