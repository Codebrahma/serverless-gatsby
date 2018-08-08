import React from 'react';

import { Flex, Stack } from 'serverless-design-system/src';
import RightBoxBg from '../assets/images/footerRightBoxBg.png';

export default (LeftColumn, RightColumn) => (
  () => (
    <Stack.relative
      bg="serverlessRed"
      top="-320px"
      mb="-290px"
      o="hidden"
    >
      <LeftColumn />
      <Flex.center
        width={[1, 1, 1/2]}
        py={[5, 5, '150px']}
        px={[3, 3, '100px']}
        boxSizing="border-box"
        flexDirection="column"
        background={`#fd5750 url(${RightBoxBg}) no-repeat`}
        backgroundSize="cover"
      >
        <RightColumn />
      </Flex.center>
    </Stack.relative>
  )
);
