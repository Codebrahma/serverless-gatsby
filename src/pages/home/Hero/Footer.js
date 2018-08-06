import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Flex, Image, Heading } from 'serverless-design-system/src';
import videoIcon from '../../../assets/images/video.png';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default () => (
  <StyledLink to='/overview-video'>
    <Flex
      width={[ 1, 1, 3/4 ]}
      my={[2, 4, 5]}
      mx={'auto'}
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
    >
      <Image
        src={videoIcon}
        height='50px'
        width='auto'
        ml={1}
        mr={[0, 0, 2]}
      />
      <Heading.h4
        color='white'
        fontSize={[3, 3, 4]}
        mx={1}
        mb={0}
        align='center'
      >
        watch the video to learn more
      </Heading.h4>
    </Flex>
  </StyledLink>
);
