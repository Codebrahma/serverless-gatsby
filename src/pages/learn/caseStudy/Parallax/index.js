import React from 'react'

import { Container, Flex } from 'serverless-design-system/src'

import Introduction from './Introduction'
import Challenge from './Challenge'
import WhyServerless from './WhyServerless'

const Parallax = () => (
  <Container maxWidth={1}>
    <Flex.column>
      <Introduction />
      <Challenge />
      <WhyServerless />
    </Flex.column>
  </Container>
)

export default Parallax