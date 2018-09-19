import React from 'react'
import {
  Flex,
  Box,
  Button,
} from 'serverless-design-system/src'

const RightSection = () => (
  <Flex.column
    width={[1, 1, 0.4]}
    alignItems='center'
    justifyContent='flex-end'
    py={3}
    px={[0, 0, 2, 3, 6]}
  >
    <Box width={1} maxWidth={280}>
      <Button width={1} mb={3}>use cases</Button>
      <Button width={1} mb={3}>comparisions</Button>
      <Button width={1}>case study</Button>
    </Box>
  </Flex.column>
)

export default RightSection