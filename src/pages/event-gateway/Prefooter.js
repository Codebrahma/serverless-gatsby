import React from 'react';

import { Flex, Box, TextWithIcon, Heading, Button, P } from 'serverless-design-system/src';
import createPrefooter from '../../components/Prefooter';
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
      <Button
        width="280px"
        border="2"
        color="white"
        px='2.5rem'
      >
          getting started
        </Button>
    </Box>
    <Box pb={2}>
      <Button
        width="280px"
        border="2"
        hoverColor="white"
        color="white"
        px={1}
      >
        learn more
      </Button>
    </Box>
    <Box>
      <Button
        width="280px"
        border="2"
        hoverColor="white"
        color="white"
      >
        examples
      </Button>
    </Box>
  </Flex>
);

export default createPrefooter(LeftItem, RightItem);
