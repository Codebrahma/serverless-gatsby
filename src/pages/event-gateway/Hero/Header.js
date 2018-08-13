import React from 'react'
import { 
  Flex, 
  Image,
  HeroTitle,
  HeroMainTitle,
  HeroDescription,
  HeroInlineDescription, 
} from 'serverless-design-system/src'

import serverlessBolt from 'src/assets/images/group-6.png'
import {

} from 'src/fragments'

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex.horizontallyCenter flexDirection='column' mb={2}>
    <Flex.horizontallyCenter height='86px' my={2}>
      <Image src={serverlessBolt} maxHeight='67px' />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle>event gateway</HeroMainTitle>
    <HeroInlineDescription>
      React to any event on any cloud.
    </HeroInlineDescription>
    <HeroDescription>
      The Event Gateway is an event router designed for event-driven, serverless
      architectures. It makes it easy to wire functions to http endpoints, react
      to business events with serverless functions, and to share event
      subscriptions with others.
    </HeroDescription>
  </Flex.horizontallyCenter>
)

export default Header
