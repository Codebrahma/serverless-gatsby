import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import background from 'src/assets/images/case-studies-background.png'

const UseCasesHero = () => (
  <HeroWrapper
    background={`black url(${background})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs selected="case-studies" />
    </Box>

    <ResponsiveStack
      mb={[2, 2, 4, 6]}
      color="white"
    >
      <Box width={[1, 1, 10/12, 11/12]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily="Soleil"
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Scaling to millions of requests with the Serverless Framework
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero