import React from 'react';

import { Flex, Button, SecondaryButton } from 'serverless-design-system/src';

const callToActionProps = {
  mx: 2,
  my: 1,
  px: 1,
  width: [ 3/4, 3/5, 2/4, 3/10 ],
};

export default () => (
  <Flex
    display='flex'
    flexDirection={['column', 'column', 'row']}
    width={[1, 1, 3/4]}
    alignItems='center'
    justifyContent='center'
    mx='auto'
    my={3}
  >
    <Button
      border={0}
      {...callToActionProps}
    >
      sign up
    </Button>
    <SecondaryButton {...callToActionProps}>
      enterprise demo
    </SecondaryButton>
  </Flex>
);
