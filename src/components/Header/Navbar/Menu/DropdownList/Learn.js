import React from 'react';
import {
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuItem from './SubMenuItem';
import NavLink from './NavLink';
import { learn } from './navigationPath';

export default () => (
  <List m='0' p='0'>
    <NavLink to={learn.useCases}>
      <ListItem my={2}>  
        <SubMenuItem>why?</SubMenuItem>
      </ListItem>
    </NavLink>
    <NavLink to={learn.why}>
      <ListItem my={2}>
        <SubMenuItem>use cases</SubMenuItem>
      </ListItem>
    </NavLink>
    <NavLink to={learn.comparisions}>
      <ListItem my={2}>
        <SubMenuItem>comparisons</SubMenuItem>
      </ListItem>
    </NavLink>
  </List>
);
