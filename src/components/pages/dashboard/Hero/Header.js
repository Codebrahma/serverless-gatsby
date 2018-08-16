import React from 'react'
import {
  Flex,
  Image,
  HeroTitle,
  HeroMainTitle,
  HeroInlineDescription,
} from 'serverless-design-system/src'

import dashboardIcon from 'src/assets/images/icon-platform-dash.png'

const Header = () => (
  <Flex.horizontallyCenter flexDirection='column' mb={2}>
    <Flex.horizontallyCenter height='86px' my={2}>
      <Image src={dashboardIcon} maxHeight='67px' />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle>dashboard</HeroMainTitle>
    <HeroInlineDescription>
      Visualize, monitor &amp; collaborate on serverless applications
    </HeroInlineDescription>
  </Flex.horizontallyCenter>
)

export default Header
