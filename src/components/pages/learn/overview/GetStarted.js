import React from 'react'

import {
  Background,
  Column,
  SecondaryButton,
  Text,
  Container,
} from 'serverless-design-system/src'
import learnOverviewGetStartedBg from 'src/assets/images/learnOverviewGetStarted.png'

const GetStarted = () => (
  <Container>
    <Background
      backgroundImage={`url(${learnOverviewGetStartedBg})`}
      backgroundSize='contain'
    >
      <Column
        justifyContent='center'
        alignItems='center'
        minHeight="280px"
      >
        <Text.p
          align='center'
          color='white'
          fontSize={5}
          lineHeight={4}
          letterSpacing={"0.3px"}
          my={2}
        >
          focus on your business logic, not on your servers.
        </Text.p>
        <SecondaryButton
          background='white'
          my={1}
        >
          get started
        </SecondaryButton>
      </Column>
    </Background>
  </Container>
)

export default GetStarted