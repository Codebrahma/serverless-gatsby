import React from 'react';
import {
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuItem from './SubMenuItem';
import { resources } from './navigationPath';

export default () => (
  <List m='0' p='0'>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.blog,
          backgroundOnHover: true,
        }}
      >
        blog
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.forum,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        forum
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.meetups,
          backgroundOnHover: true,
        }}
      >
        meetups
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: resources.slack,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        slack
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: resources.workshops,
          backgroundOnHover: true,
        }}
      >
        workshops
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)
