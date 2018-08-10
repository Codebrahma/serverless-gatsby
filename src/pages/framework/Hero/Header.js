import React from 'react';
import {
  Flex,
  Image,
  P
} from 'serverless-design-system/src';

import HeroTitle from 'src/fragments/HeroTitle';
import HeroMainTitle from 'src/fragments/HeroMainTitle';
import serverlessBolt from 'src/assets/images/serverlessBolt.png';

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
        maxWidth='70px'
      />
    </Flex.horizontallyCenter>
    <HeroTitle>
      serverless
    </HeroTitle>
    <HeroMainTitle>
      framework
    </HeroMainTitle>
    <Flex.horizontallyCenter
      px={[2, 2, 0]}
      pb={1}
    >
      <P
        fontSize={3}
        lineHeight={3}
        color="white"
        align="center"
      >
        The easy, open way to build serverless applications
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
        The Serverless Framework is an open-source CLI for building and deploying serverless applications. With over 6 million deployments handled, the Serverless Framework is the tool developers trust to build cloud applications.
      </P>
    </Flex.horizontallyCenter>
  </Flex.horizontallyCenter>
);

export default Header;