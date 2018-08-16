import React from 'react'
import {
  Flex, 
  Button,
} from 'serverless-design-system/src'

const RightSection = () => (
  <Flex.column
    width={[1, 1, 7/20]}
    alignItems='center'
    justifyContent='flex-end'
    py={3}
  >
    <Button mb={3}>use cases</Button>
    <Button mb={3}>comparisions</Button>
    <Button>case study</Button>
  </Flex.column>
)

export default RightSection