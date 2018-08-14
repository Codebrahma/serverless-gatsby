import React from 'react'

import { Box, Flex } from 'serverless-design-system/src'

import TextField from './TextField'
import SubTitle from './../Pros/SubTitle'

export default () => (
  <Flex.column>
    <Box width={[ 1, 1, 5/7 ]}>
      <SubTitle>
        Interested in an enterprise demo? Let’s talk.
      </SubTitle>
    </Box>

    <Box my={3} width={1}>
      <TextField placeholder="Email" />
    </Box>

    <Flex.spaceBetween my={2}>
      <TextField
        width={48/100}
        placeholder="First Name"
      />
      <TextField
        width={48/100}
        placeholder="Last Name"
      />
    </Flex.spaceBetween>

    <Box my={2}>
      <TextField placeholder="Company Name" />
    </Box>
  </Flex.column>
);
