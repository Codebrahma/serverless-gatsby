import React from 'react'
import { withTheme } from 'styled-components'

import { Box, Container } from 'serverless-design-system/src'

const HeroWrapper = ({ children, theme, ...otherProps }) => (
  <Box
    width={1}
    pt={[
      theme.navbarHeights.mobile,
      theme.navbarHeights.mobile,
      theme.navbarHeights.desktop,
    ]}
    background='black'
    {...otherProps}
  >
    <Container px={0} py={4}>
      {children}
    </Container>
  </Box>
)

export default withTheme(HeroWrapper)
