import React from 'react'

import { Box, List, ListItem, } from 'serverless-design-system/src'

const AutoScrollMenu= ({ ComparisonListData }) => (
  <Box width={[1, 1, 1/3]}>
    <List>
      {ComparisonListData.map(({ title }) => (
        <ListItem key={title} m={2} styleType='none'>
          {title}
        </ListItem>
      ))}
    </List>
  </Box>
)

export default AutoScrollMenu