import React from 'react'

import { Box, Heading } from 'serverless-design-system/src'

import Description from './Description'

export default ({ title, description }) => (
  <Box my={4}>
    <Heading.h4
      fontFamily="SoleilBk"
      lineHeight={3}
    >
      { title }
    </Heading.h4>
    <Description>
      { description }
    </Description>
  </Box>
)
