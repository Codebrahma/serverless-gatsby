import React from 'react';

import {
  Flex,
  Box,
  TextWithIcon,
  Heading,
  P
} from 'serverless-design-system/src';
import createPrefooter from '../../components/Prefooter';
import WhiteButton from '../../components/Fragments/Common/WhiteButton';
import whiteRectangleDots from '../../assets/images/whiteRectangleDots.png';

const LeftItem = () => (
  <Flex.horizontallyCenter
    width={[1, 1, 1/2]}
    py={[3, 5, '150px']}
    px={[3, 5, '80px']}
    boxSizing="border-box"
    flexDirection="column"
  >
    <TextWithIcon
      iconSrc={whiteRectangleDots}
      iconHeight="100px"
      iconWidth="150px"
      iconTop="-62px"
      iconLeft="-115px"
      backgroundSize={[0, 0, 'initial']}
    >
      <Heading.h2
        color="white"
        fontFamily="SoleilBk"
      >
        Ready to get started?
      </Heading.h2>
    </TextWithIcon>
    <P color="white">
      Dig deeper into Event Gateway use cases, or check out the examples in our open source repo.
    </P>
  </Flex.horizontallyCenter>
);

const RightItem = () => (
  <Flex flexDirection="column">
    <Box pb={2}>
      <WhiteButton>getting started</WhiteButton>
    </Box>
    <Box pb={2}>
      <WhiteButton>learn more</WhiteButton>
    </Box>
    <Box>
      <WhiteButton>examples</WhiteButton>
    </Box>
  </Flex>
);

export default createPrefooter(LeftItem, RightItem);
