import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Image,
  P
} from 'serverless-design-system/src';

import serverlessBolt from '../../../assets/images/serverlessBolt.png';

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
        maxWidth='70px'
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
      framework
    </Heading.h1>
    <Flex
      justifyContent="center"
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
    </Flex>
    <Flex
      justifyContent="center"
      px={[2, 2, '10%']}
      pb={1}
    >
      <P
        lineHeight={3}
        align="center"
      >
        The Serverless Framework is an open-source CLI for building and deploying serverless applications. With over 6 million deployments handled, the Serverless Framework is the tool developers trust to build cloud applications.
      </P>
    </Flex>
  </Flex>
);

export default Header;