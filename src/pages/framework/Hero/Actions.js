import React from 'react';

import { Flex, Button, SecondaryButton } from 'serverless-design-system/src';

const Actions = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    width={0.5}
    justifyContent='center'
    mx='auto'
    my={4}
  >
    <Button mx={1} mb={2} width={'280px'} border={0}>quick start</Button>
    <SecondaryButton mx={1} width={'280px'}>login</SecondaryButton>
  </Flex>
);

export default Actions;