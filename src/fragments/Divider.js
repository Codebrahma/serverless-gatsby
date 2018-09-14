import React from 'react'
import { Box, Image } from 'serverless-design-system/src'
import glitchDivider from '../assets/images/glitch-divider.png'

export default ({ visibleInSmallScreens }) => (
  <Box
    width={1}
    py={4}
    display={ visibleInSmallScreens ? 'block' : ['none', 'none', 'block']}
  >
    <Image
      src={glitchDivider}
      width={1}
      height={["100px", "100px", "160px"]}
    />
  </Box>
);
