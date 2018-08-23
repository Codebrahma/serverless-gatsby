import React from 'react'

import { Column, Heading, HeroTitle, HeroMainTitle } from 'serverless-design-system/src'

const HeroHeader = () => (
  <Column mt={2}>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle>platform</HeroMainTitle>
    <Heading.h3
      fontSize={[3, 3, 5]}
      align='center'
      color='white'
      fontFamily='SoleilBk'
      mx={2}
      my={[2, 2, 4]}
    >
      Everything you need to operationalize serverless development
    </Heading.h3>
  </Column>
)

export default HeroHeader