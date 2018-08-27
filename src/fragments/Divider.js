import React from 'react'
import { Box, Image } from 'serverless-design-system/src'
import glitchDivider from '../assets/images/glitch-divider.png'

export default () => (
  <Box
    width={1}
    py={8}
    display={['none', 'none', 'block']}
  >
    <Image
      src={glitchDivider}
      height="160px"
    />
  </Box>
);
