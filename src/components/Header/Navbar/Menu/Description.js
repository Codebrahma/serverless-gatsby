import React from 'react';

import { Box } from 'serverless-design-system/src';

const MenuDescription = ({ wrapperStyles, children }) => (
  <Box
    px={4}
    pt={3}
    pb={4}
    position={['relative', 'relative', 'absolute']}
    zIndex='999'
    top={['0', '0', '90px']}
    left={['0', '0', '-50%']}
    bg='black'
    minWidth={[ 0, 0, '225px' ]}
    {...wrapperStyles}
  >
    { children }
  </Box>
)

export default MenuDescription;
