import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import background from 'src/assets/images/use-cases-background.png'

const UseCasesHero = () => (
  <HeroWrapper
    background={`black url(${background})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs selected="use-cases" />
    </Box>

    <ResponsiveStack
      mb={[2, 2, 4, 5]}
      color="white"
    >
      <Box width={[1, 1, 1/2]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily="Soleil"
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Use Cases
        </Text.p>
      </Box>
      <Box
        width={[1, 1, 1/2]}
        pl={[0, 0, 4]}
        pr={[0, 0, 6]}
      >
        <Text.p
          fontSize={[2, 2, 4]}
          fontFamily="SoleilLt"
          lineHeight={3}
          letterSpacing={0}
          mt={[3, 3, 1]}
          mb={3}
        >
          More and more developers are moving to Serverless as a way to increase velocity and decrease monotony.
        </Text.p>
        <Text.p
          fontSize={[2, 2, 4]}
          fontFamily="SoleilLt"
          lineHeight={3}
          letterSpacing={0}
          mt={[3, 3, 5]}
          mb={3}
        >
          Here we describe some core use cases for serverless, though we encourage you to think beyond them. Serverless is incredibly flexible and can be used to address a wide variety of application problems. It is also extensible, making it easy to build in use cases that are not currently supported.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero