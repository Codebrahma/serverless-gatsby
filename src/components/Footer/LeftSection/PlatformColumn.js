import React from 'react';

import FooterListColumn from './Column';
import { platform } from './../navigationPath';

export default () => (
  <FooterListColumn
    header="platform"
    listItems={[
      {
        name: 'framework',
        navProps: { to: platform.framework },
      },
      {
        name: 'dashboard',
        navProps: { to: platform.dashboard },
      },
      {
        name: 'event gateway',
        navProps: { to: platform.eventGateway },
      },
      {
        name: 'enterprise',
        navProps: { to: platform.enterprise, completed: false },
      }
    ]}
  />
);
