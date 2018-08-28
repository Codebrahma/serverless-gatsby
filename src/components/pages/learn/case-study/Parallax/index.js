import React from 'react'

import { Flex } from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import Introduction from './Introduction'
import Challenge from './Challenge'
import WhyServerless from './WhyServerless'

const Parallax = () => (
  <AppContainer>
    <Flex.column>
      <Introduction />
      <Challenge />
      <WhyServerless />
    </Flex.column>
  </AppContainer>
)

export default Parallax