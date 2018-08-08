import React from 'react';

import { Flex, Button, SecondaryButton, Stack } from 'serverless-design-system/src';

export default () => (
  <Stack.center
    width={[1, 1, 3/4]}
    mx='auto'
    my={3}
  >
    <Button mx={2} my={1}>
      sign up
    </Button>
    <SecondaryButton mx={2} my={1}>
      enterprise demo
    </SecondaryButton>
  </Stack.center>
);
