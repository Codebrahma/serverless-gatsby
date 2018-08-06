import React from 'react';

import { Flex, Button, SecondaryButton } from 'serverless-design-system/src';

// TODO: Remove hardcoded pixels
const Actions = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    width={0.5}
    justifyContent='center'
    alignItems='center'
    mx='auto'
    my={3}
  >
    <Button mx={1} my={1} width="280px" border={0}>quick start</Button>
    <SecondaryButton mx={1} my={1} width="280px">login</SecondaryButton>
  </Flex>
);

export default Actions;