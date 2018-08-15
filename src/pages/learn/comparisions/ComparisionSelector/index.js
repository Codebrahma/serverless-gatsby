import React from 'react'

import { Box, List, ListItem } from 'serverless-design-system/src'

const ComparisonListData = [
  'Docker', 
  'CloudFormation',
  'Serverless Application Model (SAM)',
  'Zappa, ClaudiaJS etc.',
  'Terraform',
  'Rolling your own tooling',
  'Heroku'
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