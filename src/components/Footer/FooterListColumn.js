import React from 'react';

import { Box } from 'serverless-design-system/src';
import FooterListItem from './FooterListItem';

// Renders each column in the footer list
const FooterListColumn = ({ header, listItems }) => (
  <Box
    width={['50%', '50%', '20%']}
    mb={[2, 2, 0]}
  >
    <FooterListItem 
      color="white"
      content={header}
      pt={1}
    />
    <Box>
    {
      listItems.map((listItem, index) => (
        <FooterListItem
          key={index}
          color="gray.3"
          content={listItem}
        />
      ))
    }
    </Box>
  </Box>
);

export default FooterListColumn;