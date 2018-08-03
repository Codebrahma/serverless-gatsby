import React from 'react';
import {
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuItem from './SubMenuItem';

export default () => (
  <List m='0' p='0'>
    <ListItem my={2}>
      <SubMenuItem>why?</SubMenuItem>
    </ListItem>
    <ListItem my={2}>
      <SubMenuItem>use cases</SubMenuItem>
    </ListItem>
    <ListItem my={2}>
      <SubMenuItem>comparisons</SubMenuItem>
    </ListItem>
  </List>
);
