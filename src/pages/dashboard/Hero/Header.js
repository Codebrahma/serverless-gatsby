import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Image,
  P
} from 'serverless-design-system/src';

import dashboardIcon from '../../../assets/images/icon-platform-dash.png';

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex flexDirection="column" justifyContent="center" mb={2}>
    <Flex
      height='86px'
      justifyContent="center"
      my={2}
    >
      <Image
        src={dashboardIcon}
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
      dashboard
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
        Visualize, monitor & collaborate on serverless applications
      </P>
    </Flex>
  </Flex>
);

export default Header;