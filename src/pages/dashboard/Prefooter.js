import React from 'react';

import { Flex, Box, TextWithIcon, Heading, Button, P } from 'serverless-design-system/src';
import createPrefooter from '../../components/Prefooter';
import whiteRectangleDots from '../../assets/images/whiteRectangleDots.png';

const LeftColumn = () => (
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
        New to serverless?
      </Heading.h2>
    </TextWithIcon>
    <P color="white" m={0}>
      To get started, pop open your terminal &amp; run
    </P>
    <P color="white">npm install serverless -g</P>
  </Flex.horizontallyCenter>
);

const RightColumn = () => (
  <Flex flexDirection="column">
    <Box pb={2}>
      <Button
        width="280px"
        border="2"
        color="white"
        >
          documentation
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
        serverless example
      </Button>
    </Box>
    <Box>
      <Button
        width="280px"
        border="2"
        hoverColor="white"
        color="white"
      >
        github repo
      </Button>
    </Box>
  </Flex>
);

export default createPrefooter(LeftColumn, RightColumn);
