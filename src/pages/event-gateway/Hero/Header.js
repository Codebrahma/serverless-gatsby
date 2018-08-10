import React from 'react';
import {
  Flex,
  Heading,
  Image,
  P
} from 'serverless-design-system/src';

import serverlessBolt from 'src/assets/images/group-6.png';
import HeroTitle from 'src/fragments/HeroTitle';
import HeroMainTitle from 'src/fragments/HeroMainTitle';

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex.horizontallyCenter
    flexDirection="column"
    mb={2}
  >
    <Flex.horizontallyCenter
      height='86px'
      my={2}
    >
      <Image
        src={serverlessBolt}
        maxHeight='67px'
      />
    </Flex.horizontallyCenter>
    <HeroTitle>
      serverless
    </HeroTitle>
    <HeroMainTitle>
      event gateway
    </HeroMainTitle>
    <Flex.horizontallyCenter
      px={[2, 2, 0]}
      pb={1}
    >
      <P
        m={0}
        fontSize={3}
        lineHeight={3}
        color="white"
        align="center"
      >
        React to any event on any cloud.
      </P>
    </Flex.horizontallyCenter>
    <Flex.horizontallyCenter
      px={[2, 2, 5, '18%']}
      pb={1}
    >
      <P
        lineHeight={3}
        align="center"
      >
        The Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.
      </P>
    </Flex.horizontallyCenter>
  </Flex.horizontallyCenter>
);

export default Header;