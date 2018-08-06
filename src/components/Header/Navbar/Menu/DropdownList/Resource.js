import React from 'react';
import {
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuItem from './SubMenuItem';
import NavLink from '../../../../Fragments/Common/NavLink';
import { resources } from './navigationPath';

export default () => (
  <List m='0' p='0'>
    <NavLink to={resources.blog}>
      <ListItem my={2}>
        <SubMenuItem>blog</SubMenuItem>
      </ListItem>
    </NavLink>
    <NavLink to={resources.forum} crossDomain>
      <ListItem my={2}>
        <SubMenuItem>forum</SubMenuItem>
      </ListItem>
    </NavLink>
    <NavLink to={resources.meetups}>
      <ListItem my={2}>
        <SubMenuItem>meetups</SubMenuItem>
      </ListItem>
    </NavLink>
    <NavLink to={resources.slack} crossDomain>
      <ListItem my={2}>
        <SubMenuItem>slack</SubMenuItem>
      </ListItem>
    </NavLink>
    <NavLink to={resources.workshops}>
      <ListItem my={2}>
        <SubMenuItem>workshops</SubMenuItem>
      </ListItem>
    </NavLink>
  </List>
)
