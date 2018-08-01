import React from 'react';

import { Box, Button } from 'serverless-design-system/src';

import MenuTitle from './Title';
import MenuDescription from './Description';
import {
  PlatformDetailedMenu,
  DeveloperDetailedMenu,
  LearnDetailedMenu,
  ResourceDetailedMenu
} from './ExtendedMenu';

// TODO: REMOVE THE MIN WIDTH PASSED TO MENU DESCRIPTION
// MAKE IT WORK VIA FLEX WRAP
const PlatformMenu = () => (
  <Box>
    <MenuTitle name={'platform'} />
    <MenuDescription wrapperStyles={{ minWidth: '320px' }}>
      <PlatformDetailedMenu />
    </MenuDescription>
  </Box>
);

const DeveloperMenu = () => (
  <Box>
    <MenuTitle name={'developers'} />
    <MenuDescription wrapperStyles={{ minWidth: '380px' }}>
      <DeveloperDetailedMenu />
    </MenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'learn'} />
    <MenuDescription>
      <LearnDetailedMenu />
    </MenuDescription>
  </Box>
);

const ResourcesMenu = () => (
  <Box>
    <MenuTitle name={'resources'} />
    <MenuDescription>
      <ResourceDetailedMenu />
    </MenuDescription>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <MenuTitle name={'enterprise'} />
  </Box>
)

const SignupMenu = () => (
  <Box>
    <Button>signup</Button>
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
