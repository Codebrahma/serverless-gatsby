import React from 'react'
import {
  Box,
  Background,
  Column,
  Container,
  Text,
  Heading,
  TertiaryButton,
} from 'serverless-design-system/src'

import learnOverviewGetStartedBg from 'src/assets/images/learnOverviewGetStarted.png'

const GetStarted = () => (
  <Container>
    <Box py={4} px={[0, 0, 15]}>
      <Background
        backgroundImage={`url(${learnOverviewGetStartedBg})`}
        backgroundSize='cover'
      >
        <Column
          justifyContent='center'
          alignItems='center'
          minHeight="280px"
          width={[1, 1, 1, 0.65]}
          px={25}
          py={4}
          m="auto"
        >
          <Heading.h2
            align="center"
            fontFamily="SoleilSb"
            lineHeight="1.4"
            color="white"
            m={0}
          >
            The Serverless Platform
          </Heading.h2>

          <Text.p
            align='center'
            color='white'
            lineHeight={4}
            letterSpacing="0.3px"
            mt={1}
            mb={3}
          >
            The Serverless Platform is a three-part toolkit that enables developers build, operate, and integrate their serverless applications on any cloud provider.
          </Text.p>
          <TertiaryButton>
            get started
          </TertiaryButton>
        </Column>
      </Background>
    </Box>
  </Container>
)

export default GetStarted