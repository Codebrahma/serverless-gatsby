import React from 'react';

import FooterListColumn from './Column';
import { developers } from '../navigationPath';

export default () => (
  <FooterListColumn
    header="developers"
    listItems={[
      {
        name: 'docs',
        navProps: { to: developers.docs, completed: false },
      },
      {
        name: 'quick starts',
        navProps: { to: developers.quickStarts, completed: false },
      },
      {
        name: 'examples & guides',
        navProps: { to: developers.examplesAndGuides, completed: false },
      }
    ]}
  />
);
