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
  >
    <Button mx={1} my={1} width={'280px'} border={0}>sign up</Button>
    <SecondaryButton mx={1} my={1} width={'280px'}>contact sales</SecondaryButton>
  </Flex>
);

export default Actions;