import React from 'react'

import {
  Background,
  Box,
  Column,
  Heading,
  Image,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import resourcesMeetupMap from 'src/assets/images/resourcesMeetupMap.png'
import glitchDivider from 'src/assets/images/glitch-divider.png'

const Introduction = () => (
  <Column
    alignItems="center"
    my={[4, 4, 4, 5]}
  >
    <AppContainer>
      <Heading.h2
        fontFamily="SoleilSb"
        lineHeight={3}
        letterSpacing="0"
        align="center"
      >
        Find a Serverless meetup near you.
      </Heading.h2>
      <Heading.h6
        fontFamily="SoleilBk"
        color="gray.3"
        fontSize={2}
        lineHeight={4}
        align="center"
      >
        Don't see a meetup in your city ? Contact us and start your own.
      </Heading.h6>
    </AppContainer>
    <Box mt={4} width={1}>
      <Background
        background={`url(${glitchDivider})`}
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width={1}
      >
        <AppContainer>
          <Column alignItems="center">
            <Image
              src={resourcesMeetupMap}
              alt="resources-map"
            />
          </Column>
        </AppContainer>
      </Background>
    </Box>
  </Column>
)

export default Introduction