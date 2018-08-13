import React from 'react'

import { Flex, P } from 'serverless-design-system/src'

export default ({ children }) => (
  <Flex.horizontallyCenter px={[2, 2, 5, '18%']} pb={1}>
    <P lineHeight={3} align="center">
      {children}
    </P>
  </Flex.horizontallyCenter>
)
