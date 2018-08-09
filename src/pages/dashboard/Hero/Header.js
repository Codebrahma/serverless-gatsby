import React from 'react';
import {
  Flex,
  Box,
  Image,
  Heading,
  GatsbyImg,
  P
} from 'serverless-design-system/src';

import {
  HeroTitle,
  HeroMainTitle,
  HeroInlineDescription
} from 'src/fragments';

import ImageContextHOC from '../../../components/ImageContextHOC';

const Header = ({ dashboardIcon }) => (
  <Flex.horizontallyCenter
    flexDirection="column"
    mb={2}
  >
    <Flex.horizontallyCenter
      height='86px'
      my={2}
    >
      <GatsbyImg
        title="dashboardIcon"
        alt="dashboardIcon"
        resolutions={dashboardIcon.resolutions}
      />
    </Flex.horizontallyCenter>
    <HeroTitle>
      serverless
    </HeroTitle>
    <HeroMainTitle>
      dashboard
    </HeroMainTitle>
    <HeroInlineDescription>
      Visualize, monitor &amp; collaborate on serverless applications
    </HeroInlineDescription>
  </Flex.horizontallyCenter>
);

export default ImageContextHOC(Header, ['dashboardIcon']);