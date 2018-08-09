import React from 'react';
import {
  Box,
  Flex,
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuTitle from './SubMenuTitle';
import SubMenuItem from './SubMenuItem';
import { developers } from './navigationPath';

const SubMenu = ({ title, options }) => (
  <Box>
    <SubMenuTitle>
      {title}
    </SubMenuTitle>
    <List
      m='0'
      p='0'
      mt={2}
    >
      {
        options.map(({ name, to, crossDomain, completed }) => (
          <ListItem.noStyleType
            my={2}
            key={name}
          >
            <SubMenuItem
              navProps={{ to, crossDomain, completed }}
            >
              {name}
            </SubMenuItem>
          </ListItem.noStyleType>
        ))
      }
    </List>
  </Box>
);

const documentationOptions = [
  { name: 'framework', to: developers.documentation.framework, crossDomain: false, completed: false },
  { name:  'platform', to: developers.documentation.platform, crossDomain: true, completed: false },
];

const quickStartOptions = [
  { name: 'aws', to: developers.quickStart.aws, crossDomain: false, completed: false },
  { name: 'azure', to: developers.quickStart.azure, crossDomain: false, completed: false },
  { name: 'google', to: developers.quickStart.google, crossDomain: false, completed: false },
  { name: 'others', to: developers.quickStart.others, crossDomain: false, completed: false },
];

const examplesOptions = [
  { name: 'api\'s', to: developers.examples, crossDomain: false, completed: false },
  { name: 'cron jobs', to: developers.examples, crossDomain: false, completed: false },
  { name: 'webhooks', to: developers.examples, crossDomain: false, completed: false },
  { name: 'event processing', to: developers.examples, crossDomain: false, completed: false },
];

export default () => (
  <Flex flexWrap='wrap'>
    <Box
      width={1}
      mb={3}
    >
      <SubMenu
        title='documentation'
        options={documentationOptions}
      />
    </Box>
    <Box width={[1, 1, 1/2]}>
      <SubMenu
        title='quick starts'
        options={quickStartOptions}
      />
    </Box>
    <Box width={[1, 1, 1/2]}>
      <SubMenu
        title='example & guides'
        options={examplesOptions}
      />
    </Box>
  </Flex>
);
