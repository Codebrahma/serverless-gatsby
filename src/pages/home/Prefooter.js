import React from 'react';

import { Flex, Box, TextWithIcon, Heading, Button, P } from 'serverless-design-system/src';
import createPrefooter from '../../components/Prefooter';
import whiteRectangleDots from '../../assets/images/whiteRectangleDots.png';

const LeftColumn = () => (
  <Flex.horizontallyCenter
    width={[1, 1, 1/2]}
    py={[3, 5, '150px']}
    px={[3, 5, '100px']}
    boxSizing="border-box"
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
        Next Steps
      </Heading.h2>
    </TextWithIcon>
    <P color="white">
      Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.
    </P>
    <P color="white">
      Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.
    </P>
  </Flex.horizontallyCenter>
);

const RightColumn = () => (
  <Flex flexDirection="column">
    <Box m={1}>
      <Button
        width="230px"
        border="2"
        color="white"
      >
        use cases
      </Button>
    </Box>
    <Box m={1}>
      <Button
        width="230px"
        border="2"
        hoverColor="white"
        color="white"
      >
        comparision
      </Button>
    </Box>
  </Flex>
);

export default createPrefooter(LeftColumn, RightColumn);
