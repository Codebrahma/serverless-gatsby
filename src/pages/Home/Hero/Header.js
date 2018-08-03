import React from 'react';

import { Flex, Heading } from 'serverless-design-system/src';

const headingProps = {
  fontFamily: 'Serverless',
  align: 'center',
  color: 'white',
};

export default () => (
  <Flex flexDirection='column'>
    <Heading.h3 {...headingProps}>
      serverless
    </Heading.h3>
    <Heading.h1 {...headingProps}>
      platform
    </Heading.h1>
    <Heading.h3
      {...headingProps}
      fontFamily='SoleilBk'
      my={4}
    >
      Everything you need to operationalize serverless development
    </Heading.h3>
  </Flex>
);
