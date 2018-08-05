import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Image,
  P
} from 'serverless-design-system/src';

import serverlessBolt from '../../../assets/images/group-6.png';

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex flexDirection="column" justifyContent="center" mb={2}>
    <Flex
      height='86px'
      justifyContent="center"
      my='16px'
    >
      <Image
        src={serverlessBolt}
        maxHeight='67px'
      />
    </Flex>
    <Heading.h2
      align='center'
      fontFamily='Serverless'
      color='white'
      lineHeight={0}
      letterSpacing="-1.1px"
      fontSize={5}
      mb={0}
    >
      serverless
    </Heading.h2>
    <Heading.h1
      align='center'
      fontFamily='Serverless'
      color='white'
    >
      event gateway
    </Heading.h1>
    <Flex
      justifyContent="center"
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
    </Flex>
    <Flex
      justifyContent="center"
      px={[2, 2, 5, '18%']}
      pb={1}
    >
      <P
        lineHeight={3}
        align="center"
      >
        The Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.
      </P>
    </Flex>
  </Flex>
);

export default Header;