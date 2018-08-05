import React from 'react';

import {
  Box,
  Heading,
  Image as Img,
  P
} from 'serverless-design-system/src';

export default ({ img, title, description }) => (
  <Box
    px={[2, 3, 4]}
    py={[2, 2, 4]}
  >
    <Box
      display="flex"
    >
      <Img
        height="100%"
        src={img}
        alt={title}
        mx="auto"
      />
    </Box>

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

  </Box>
);
