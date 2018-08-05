import React from 'react';

import { Flex } from 'serverless-design-system/src';

import FooterListColumn from './FooterListColumn';
import CompanyDetails from './CompanyDetails';

// Renders the entire footer list items
const FooterListItems = () => (
  <Flex
    width={[1, 1, 0.65]}
    flexDirection="column"
    order={['2', '2', '1']}
  >
    <Flex
      width={1}
      flexWrap="wrap"
      px={[1, 1, 0]}
      mb={4}
    >
      <FooterListColumn
        header="platform"
        listItems={['framework', 'dashboard', 'event gateway', 'enterprise']}
      />
      <FooterListColumn
        header="developers"
        listItems={['docs', 'quick starts', 'examples & guides']}
      />
      <FooterListColumn
        header="learn"
        listItems={['why ?', 'use cases', 'comparisions']}
      />
      <FooterListColumn
        header="resources"
        listItems={['blog', 'forum', 'meetups', 'slack', 'workshops']}
      />
      <FooterListColumn
        header="company"
        listItems={['team', 'jobs', 'champions', 'contacts']}
      />
    </Flex>
    <CompanyDetails />
  </Flex>
);

export default FooterListItems;