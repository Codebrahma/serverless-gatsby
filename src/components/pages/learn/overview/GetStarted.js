import React from 'react'
import {
  Box,
  Background,
  Column,
  Container,
  SecondaryButton,
  Text,
} from 'serverless-design-system/src'

import learnOverviewGetStartedBg from 'src/assets/images/learnOverviewGetStarted.png'

const GetStarted = () => (
  <Container>
    <Box px={[0, 0, 15]}>
      <Background
        backgroundImage={`url(${learnOverviewGetStartedBg})`}
        backgroundSize='cover'
      >
        <Column
          justifyContent='center'
          alignItems='center'
          minHeight="280px"
          px={25}
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
    </Box>
  </Container>
)

export default GetStarted