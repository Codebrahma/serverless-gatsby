import React from 'react'
import {
  Flex, 
  P,
} from 'serverless-design-system/src'

const LeftSection = () => (
  <Flex.column width={[1, 1, 13/20]} px={3} pt={2}>
    <P fontSize={8} textAlign='left' color='white' m={0}>Why Serverless ?</P>
    <P fontSize={4} textAlign='left' color='white'>Just like wireless internet has wires somewhere serverless architectures still have servers somewhere.</P>
    <P fontSize={4} textAlign='left' color='white'>What serverless really means is that, as a developer you don't have to think about servers. You just focus on code.</P>
  </Flex.column>
)

export default LeftSection