import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Image as Img,
  P
} from 'serverless-design-system/src';

export default ({ img, imgProps, title, description, children }) => (
  <Box
    px={[2, 3, 2]}
    py={[2, 2, 2]}
  >
    <Flex>
      <Img
        height="100%"
        src={img}
        alt={title}
        mx="auto"
        {...imgProps}
      />
    </Flex>

    <Heading.h3
      align="center"
      fontFamily="SoleilBk"
      my={3}
    >
      {title}
    </Heading.h3>
    <P
      align="center"
      mt={0}
      fontSize={3}
    >
      {description}
    </P>

    { children }
  </Box>
);
