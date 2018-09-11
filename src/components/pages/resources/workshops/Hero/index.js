import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import background from 'src/assets/images/resources-overview-background.png'

const UseCasesHero = () => (
  <HeroWrapper
    background={`black url(${background})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs selected="workshops" />
    </Box>

    <ResponsiveStack
      mb={[2, 2, 4, 7]}
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
          Workshops
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
          Serverless Developer Workshops are a full day focused on training for serverless development. Learn about testing, security and operations. These workshops will empower developers and technology leaders to operationalize serverless across their organization.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero