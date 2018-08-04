import React from 'react';

import { Flex, Heading } from 'serverless-design-system/src';

const headingProps = {
  fontFamily: 'Serverless',
  align: 'center',
  color: 'white',
};

export default () => (
  <Flex flexDirection='column'>
    <Heading.h3
      {...headingProps}
      fontSize={[4, 4, 5]}
    >
      serverless
    </Heading.h3>
    <Heading.h1
      {...headingProps}
      fontSize={[5, 5, 6]}
    >
      platform
    </Heading.h1>
    <Heading.h3
      {...headingProps}
      fontSize={[3, 3, 5]}
      fontFamily='SoleilBk'
      mx={2}
      my={[2, 2, 4]}
    >
      Everything you need to operationalize serverless development
    </Heading.h3>
  </Flex>
);
