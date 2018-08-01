import React from 'react';

import { Box } from 'serverless-design-system/src';

const MenuDescription = ({ wrapperStyles, children }) => (
  <Box
    pl={4}
    pr={4}
    pt={3}
    pb={4}
    position='absolute'
    zIndex='999'
    top='90px'
    left='-50%'
    bg='black'
    minWidth='225px'
    {...wrapperStyles}
  >
    { children }
  </Box>
)

export default MenuDescription;
