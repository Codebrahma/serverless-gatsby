import React from 'react'

import { Heading } from 'serverless-design-system/src'

export default ({ children }) => (
  <Heading.h1 align="center" fontFamily="Serverless" color="white">
    {children}
  </Heading.h1>
)
