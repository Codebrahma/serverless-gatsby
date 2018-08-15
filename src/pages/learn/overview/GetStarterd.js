import React from 'react'

import { Flex, SecondaryButton, P } from 'serverless-design-system/src'
import learnOverviewGetStartedBg from '../../../assets/images/learnOverviewGetStarted.png'  
const GetStarted = () => (
  <Flex.column
    backgroundImage={`url(${learnOverviewGetStartedBg})`}
    backgroundSize='contain'
    height='280px'
    justifyContent='center'
    alignItem='center'
  >
    <P align='center' color='white' fontSize={5} mx={3}>focus on your business logic, not on your servers</P>
    <SecondaryButton margin='auto'>get started</SecondaryButton>
  </Flex.column>
)

export default GetStarted