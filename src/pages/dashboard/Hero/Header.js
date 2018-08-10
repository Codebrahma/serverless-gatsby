import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Image,
  P
} from 'serverless-design-system/src';

import HeroTitle from 'src/fragments/HeroTitle';
import HeroMainTitle from 'src/fragments/HeroMainTitle';
import dashboardIcon from 'src/assets/images/icon-platform-dash.png';

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
        src={dashboardIcon}
        maxHeight='67px'
      />
    </Flex.horizontallyCenter>
    <HeroTitle>
      serverless
    </HeroTitle>
    <HeroMainTitle>
      dashboard
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
        Visualize, monitor & collaborate on serverless applications
      </P>
    </Flex.horizontallyCenter>
  </Flex.horizontallyCenter>
);

export default Header;