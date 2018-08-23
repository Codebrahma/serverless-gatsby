import React from 'react'

import { Label } from 'serverless-design-system/src'

export default ({ children }) => (
  <Label
    fontFamily="Serverless"
    fontSize={2}
    fontWeight="normal"
    lineHeight={4}
    letterSpacing={"h2"}
    color="gray.2"
  >
    {children}
  </Label>
)
