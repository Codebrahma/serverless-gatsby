import React from 'react';
import {
  Box,
  Flex,
  List,
  ListItem,
} from 'serverless-design-system/src';

import SubMenuTitle from './SubMenuTitle';
import SubMenuItem from './SubMenuItem';

const SubMenu = ({ title, options }) => (
  <Box>
    <SubMenuTitle>{title}</SubMenuTitle>
    <List m='0' p='0' mt={2}>
      {
        options.map((option) => (
          <ListItem my={2} key={option}>
            <SubMenuItem>{option}</SubMenuItem>
          </ListItem>
        ))
      }
    </List>
  </Box>
);

export default () => (
  <Flex flexWrap='wrap'>
    <Box width={1} mb={3}>
      <SubMenu
        title='documentation'
        options={[ 'framework', 'platform' ]}
      />
    </Box>
    <Box width={[1, 1, 1/2]}>
      <SubMenu
        title='quick starts'
        options={[ 'aws', 'azure', 'google cloud', 'others' ]}
      />
    </Box>
    <Box width={[1, 1, 1/2]}>
      <SubMenu
        title='example & guides'
        options={[ 'api\'s', 'cron jobs', 'webhooks', 'event processing' ]}
      />
    </Box>
  </Flex>
);
