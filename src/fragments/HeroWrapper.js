import React from 'react'
import { withTheme } from 'styled-components'
import { Background, Box } from 'serverless-design-system/src'

import { AppContainer } from 'src/components'

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
      <AppContainer>
        <Box px={[15, 15, 0]} py={4}>
          {children}
        </Box>
      </AppContainer>
    </Box>
  </Background>
)

export default withTheme(HeroWrapper)
