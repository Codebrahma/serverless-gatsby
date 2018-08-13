import React from 'react'
import { withTheme } from 'styled-components'
import { SecondaryButton } from 'serverless-design-system/src'

const comp = ({ children, theme }) => (
  <SecondaryButton
    width='280px'
    borderWidth='2.5px'
    color='white'
    px='2.5rem'
    theme={{
      colors: {
        primaryColor: theme.colors.white,
        secondaryColor: theme.colors.white,
      },
    }}
  >
    {children}
  </SecondaryButton>
)

export default withTheme(comp)
