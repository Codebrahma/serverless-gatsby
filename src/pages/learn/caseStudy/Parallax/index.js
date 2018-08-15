import React from 'react'

import { Flex } from 'serverless-design-system/src'

import Introduction from './Introduction'
import Challenge from './Challenge'
import WhyServerless from './WhyServerless'

const Parallax = () => (
  <Flex.column>
    <Introduction />
    <Challenge />
    <WhyServerless />
  </Flex.column>
)

export default Parallax