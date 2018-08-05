import React from 'react';

import { Box, P } from 'serverless-design-system/src';

// Renders Each item in the footer list
// If used >= 3 move to molecules. (Currently 2)
const FooterListItem = ({ content, color, pt }) => (
  <Box>
    <P
      color={color}
      fontFamily={'Serverless'}
      fontSize={1}
      lineHeight={1}
      letterSpacing="letterSpacings.text"
      my={'5px'}
      pt={1}
    >
      {content}
    </P>
  </Box>
);

export default FooterListItem;