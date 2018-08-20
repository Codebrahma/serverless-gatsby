import React from 'react'
import { withTheme } from 'styled-components'

import { Background, Box, Container } from 'serverless-design-system/src'

const HeroWrapper = ({ children, theme, ...otherProps }) => (
  <Background
    background='black'
    {...otherProps}
  >
    <Box
      width={1}
      pt={[
        theme.navbarHeights.mobile,
        theme.navbarHeights.mobile,
        theme.navbarHeights.desktop,
      ]}
    >
      <Container px={0} py={4}>
        {children}
      </Container>
    </Box>
  </Background>
)

export default withTheme(HeroWrapper)
