import React from 'react'

import { Box, List, ListItem } from 'serverless-design-system/src'

const ComparisonListData = [
  'Auto-scaling Websites and APIs', 
  'Event streaming',
  'Image and Video Manipulation',
  'PRocessing Events from Saas',
  'Hybrid-cloud Applications',
  'Multi-language Applications',
  'Continuous Integration and Continuous Deployment (CI/CD)'
]

const ComparisionList = () => (
  <Box width={[1, 1, 1/3]}>
    <List>
      {ComparisonListData.map(item => (
        <ListItem key={item} m={2} styleType='none'>
          {item}
        </ListItem>
      ))}
    </List>
  </Box>
)

export default ComparisionList