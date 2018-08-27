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
      backgroundSize='cover'
    >
      <Column
        justifyContent='center'
        alignItems='center'
        minHeight="280px"
        pb={4}
      >
        <Text.p
          align='center'
          color='white'
          fontSize={5}
          lineHeight={4}
          letterSpacing={"0.3px"}
          mt={3}
          mb={4}
        >
          focus on your business logic, not on your servers.
        </Text.p>
        <SecondaryButton background='white'>
          get started
        </SecondaryButton>
      </Column>
    </Background>
  </Container>
)

export default GetStarted