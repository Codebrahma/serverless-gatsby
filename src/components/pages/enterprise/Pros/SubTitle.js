import React from 'react'

import { Heading } from 'serverless-design-system/src'

export default ({ children }) => (
  <Heading.h4
    fontFamily="SoleilBk"
    lineHeight={3}
  >
    { children }
  </Heading.h4>
)
