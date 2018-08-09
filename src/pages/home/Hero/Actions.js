import React from 'react';

import { Button, SecondaryButton, ResponsiveStack } from 'serverless-design-system/src';

export default () => (
  <ResponsiveStack.center
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
  </ResponsiveStack.center>
);
