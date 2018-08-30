import React from 'react'

import { Column } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { Divider } from 'src/fragments'
import Introduction from './Introduction'
import Challenge from './Challenge'
import WhyServerless from './WhyServerless'

const Parallax = () => (
  <Column>
    <AppContainer>
      <Introduction />
      <Challenge />
    </AppContainer>
    <Divider />
    <AppContainer>
      <WhyServerless />
    </AppContainer>
  </Column>
)

export default Parallax