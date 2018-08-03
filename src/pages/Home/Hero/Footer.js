import React from 'react';

import { Flex, Image, Heading } from 'serverless-design-system/src';
import videoIcon from '../../../assets/images/video.png';

export default () => (
  <Flex
    width={[ 1, 1, 3/4 ]}
    my={5}
    mx='auto'
    flexDirection='row'
    justifyContent='center'
    alignItems='center'
  >
    <Image
      src={videoIcon}
      height='50px'
      width='auto'
      mx={2}
    />
    <Heading.h4 color='white' mb={0}>watch the video to learn more</Heading.h4>
  </Flex>
);
