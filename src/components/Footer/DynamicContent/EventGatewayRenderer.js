import React from 'react';

import { Flex, Box, TextWithIcon, Heading, Button, P } from 'serverless-design-system/src';

import whiteRectangleDots from '../../../assets/images/whiteRectangleDots.png';

const LeftRenderer = () => (
  <Box
    width={[1, 1, 1/2]}
    py={[3, 5, '150px']}
    px={[3, 5, '80px']}
    boxSizing="border-box"
    justifyContent="center"
    flexDirection="column"
  >
    <TextWithIcon
      iconSrc={whiteRectangleDots}
      iconHeight="100px"
      iconWidth="150px"
      iconTop="-30px"
      iconLeft='-80px'
      backgroundSize={[0, 0, 'initial']}
    >
      <Heading.h2 color="white">
        Ready to get started?
      </Heading.h2>
    </TextWithIcon>
    <P color="white">
      Dig deeper into Event Gateway use cases, or check out the examples in our open source repo.
    </P>
  </Box>
);

const RightRenderer = () => (
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

export default {
  LeftRenderer,
  RightRenderer,
}