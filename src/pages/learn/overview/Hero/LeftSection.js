import React from 'react'
import {
  Box, 
  Flex, 
  Image,
  P,
  HeroTitle,
  HeroMainTitle,
  HeroDescription,
  HeroInlineDescription, 
} from 'serverless-design-system/src'

const LeftSection = () => (
  <Flex.column width={[1, 1, 1/2]} px={3} pt={2}>
    <P fontSize={7} textAlign='left' color='white'>Why Serverless ?</P>
    <P fontSize={3} textAlign='left' color='white'>Just like wireless internet has wires somewhere serverless architectures still have servers somewhere.</P>
    <P fontSize={3} textAlign='left' color='white'>What serverless really means is that, as a developer you don't have to think about servers. You just focus on code.</P>
  </Flex.column>
)

export default LeftSection