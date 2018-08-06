import React from 'react';

import { Flex, Box, TextWithIcon, Heading, Button, P } from 'serverless-design-system/src';
import createPrefooter from '../../components/Prefooter';
import whiteRectangleDots from '../../assets/images/whiteRectangleDots.png';

const LeftColumn = () => (
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
      <Heading.h2 color="white">New to serverless?</Heading.h2>
    </TextWithIcon>
    <P color="white">To get started, pop open your terminal & run</P>
    <P color="white">npm install serverless -g</P>
  </Box>
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
