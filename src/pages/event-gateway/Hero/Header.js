import React from 'react';

import {
  HeroTitle,
  HeroMainTitle,
  HeroDescription,
  HeroInlineDescription
} from 'src/fragments';
import {
  Flex,
  Box,
  Heading,
  GatsbyImg,
  Image,
  P
} from 'serverless-design-system/src';

import ImageContextHOC from '../../../components/ImageContextHOC';

// TODO: Remove hardcoded pixels wherever possible
const Header = ({ gatewayIcon }) => (
  <Flex.horizontallyCenter
    flexDirection="column"
    mb={2}
  >
    <Flex.horizontallyCenter
      height='86px'
      my={2}
    >
      <GatsbyImg
        title="gatewayIcon"
        description="gatewayIcon"
        resolutions={gatewayIcon.resolutions}
      />
    </Flex.horizontallyCenter>
    <HeroTitle>
      serverless
    </HeroTitle>
    <HeroMainTitle>
      event gateway
    </HeroMainTitle>
    <HeroInlineDescription>
      React to any event on any cloud.
    </HeroInlineDescription>
    <HeroDescription>
      The Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.
    </HeroDescription>
  </Flex.horizontallyCenter>
);

export default ImageContextHOC(Header, ['gatewayIcon']);