import React from 'react';
import {
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuItem from './SubMenuItem';

export default () => (
  <List m='0' p='0'>
    <ListItem my={2}>
      <SubMenuItem>blog</SubMenuItem>
    </ListItem>
    <ListItem my={2}>
      <SubMenuItem>forum</SubMenuItem>
    </ListItem>
    <ListItem my={2}>
      <SubMenuItem>meetups</SubMenuItem>
    </ListItem>
    <ListItem my={2}>
      <SubMenuItem>slack</SubMenuItem>
    </ListItem>
    <ListItem my={2}>
      <SubMenuItem>workshops</SubMenuItem>
    </ListItem>
  </List>
)
