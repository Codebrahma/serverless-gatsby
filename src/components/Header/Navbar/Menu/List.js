import React from 'react';

import { Box, Button } from 'serverless-design-system/src';

import MenuTitle from './Title';
import MenuDescription from './Description';
import {
  PlatformDropdownList,
  DeveloperDropdownList,
  LearnDropdownList,
  ResourceDropdownList
} from './DropdownList';

import NavLink from '../../../Fragments/Common/NavLink';
import { enterprise } from './DropdownList/navigationPath';

const PlatformMenu = () => (
  <Box>
    <MenuTitle name={'platform'} />
    <MenuDescription wrapperStyles={{ minWidth: [ 0, 0, '320px'] }}>
      <PlatformDropdownList />
    </MenuDescription>
  </Box>
);

const DeveloperMenu = () => (
  <Box>
    <MenuTitle name={'developers'} />
    <MenuDescription wrapperStyles={{
      minWidth: [ 0, 0, '475px' ],
      px: 5
    }}>
      <DeveloperDropdownList />
    </MenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'learn'} />
    <MenuDescription>
      <LearnDropdownList />
    </MenuDescription>
  </Box>
);

const ResourcesMenu = () => (
  <Box>
    <MenuTitle name={'resources'} />
    <MenuDescription>
      <ResourceDropdownList />
    </MenuDescription>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <NavLink to={enterprise}>
      <MenuTitle name={'enterprise'} />
    </NavLink>
  </Box>
)

const SignupMenu = () => (
  <Box>
    <Button
      fontSize={'1.5rem'}
      px={2}
      py={'16px'}
      border={'0'}
      width='auto'
    >
      sign up
    </Button>
  </Box>
)

export default [
  PlatformMenu,
  DeveloperMenu,
  LearnMenu,
  ResourcesMenu,
  EnterpriseMenu,
  SignupMenu
];
