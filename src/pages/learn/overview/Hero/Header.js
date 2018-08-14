import React from 'react'
import {
  Flex,
  Image,
  HeroTitle,
  HeroMainTitle,
  HeroInlineDescription,
} from 'serverless-design-system/src'

const Header = () => (
  <Flex.horizontallyCenter flexDirection='column' mb={2}>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle>dashboard</HeroMainTitle>
    <HeroInlineDescription>
      Visualize, monitor &amp; collaborate on serverless applications
    </HeroInlineDescription>
  </Flex.horizontallyCenter>
)

export default Header
