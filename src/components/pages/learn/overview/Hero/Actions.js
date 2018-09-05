import React from 'react'
import {
  Flex,
  Button,
} from 'serverless-design-system/src'

const RightSection = () => (
  <Flex.column
    width={[1, 1, 0.35]}
    alignItems='center'
    justifyContent='flex-end'
    py={3}
    px={[0, 0, 2, 3, 5]}
  >
    <Button width={1} mb={3}>use cases</Button>
    <Button width={1} mb={3}>comparisions</Button>
    <Button width={1}>case study</Button>
  </Flex.column>
)

export default RightSection