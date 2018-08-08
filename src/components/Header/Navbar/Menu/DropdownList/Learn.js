import React from 'react';
import {
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuItem from './SubMenuItem';
import { learn } from './navigationPath';

export default () => (
  <List m='0' p='0'>
    <ListItem.noStyleType my={2}>
      <SubMenuItem
        navProps={{
          to: learn.why,
          backgroundOnHover: true,
        }}
      >
        why?
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType my={2}>
      <SubMenuItem
        navProps={{
          to: learn.useCases,
          backgroundOnHover: true,
        }}
      >
        use cases
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType my={2}>
      <SubMenuItem
        navProps={{
          to: learn.comparisions,
          backgroundOnHover: true,
        }}
      >
        comparisons
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
);
