import React from 'react'

import { Box, P } from 'serverless-design-system/src'
import NavLink from 'src/components/NavLink'

// Renders Each item in the footer list
// If used >= 3 move to molecules. (Currently 2)
const FooterListItem = ({ content, color, pt }) => (
  <Box>
    <NavLink {...content.navProps}>
      <P
        color={color}
        fontFamily={'Serverless'}
        fontSize={1}
        lineHeight={1}
        letterSpacing='text'
        my={'5px'}
        pt={1}
      >
        {content.name}
      </P>
    </NavLink>
  </Box>
)

export default FooterListItem
