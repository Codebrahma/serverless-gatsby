import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import background from 'src/assets/images/case-studies-background.png'

const UseCasesHero = () => (
  <HeroWrapper
    background={`url(${background})`}
    backgroundSize="contain"
  >
    <Box mb={5}>
      <HeroTabs />
    </Box>

    <ResponsiveStack
      mb={[6, 6, 7]}
      color="white"
    >
      <Box width={[1, 1, 10/12, 11/12]}>
        <Text.p
          fontSize={[7, 7, 7, 8]}
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