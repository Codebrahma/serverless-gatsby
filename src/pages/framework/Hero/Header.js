import React from 'react'
import { 
  Flex, 
  Image,
  HeroTitle,
  HeroMainTitle,
  HeroDescription,
  HeroInlineDescription, 
} from 'serverless-design-system/src'

import serverlessBolt from 'src/assets/images/serverlessBolt.png'

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex.horizontallyCenter flexDirection='column' mb={2}>
    <Flex.horizontallyCenter height='86px' my={2}>
      <Image src={serverlessBolt} maxHeight='67px' maxWidth='70px' />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle>framework</HeroMainTitle>
    <HeroInlineDescription>
      The easy, open way to build serverless applications
    </HeroInlineDescription>
    <HeroDescription>
      The Serverless Framework is an open-source CLI for building and deploying
      serverless applications. With over 6 million deployments handled, the
      Serverless Framework is the tool developers trust to build cloud
      applications.
    </HeroDescription>
  </Flex.horizontallyCenter>
)

export default Header
