import React from 'react'

import { Text } from 'serverless-design-system/src'

export default ({ children }) => (
  <Text.p
    fontFamily="SoleilBk"
    letterSpacing="normal"
    lineHeight={4}
    color="gray.3"
    my={2}
  >
    { children }
  </Text.p>
)
