import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../../learn/HeroTabs'
import background from 'src/assets/images/workshops-form-background.png'

const WorkshopForm = () => (
  <HeroWrapper
    background={`url(${background})`}
    backgroundSize="contain"
  >
    <Box px={[3, 3, 2]}>
      <Box mb={[2, 2, 5]}>
        <HeroTabs />
      </Box>

      <ResponsiveStack
        mb={9}
        color="white"
      >
        <Box width={[1, 1, 1/2]}>
          <Text.p
            fontSize={[7, 7, 7, 8]}
            fontFamily="Soleil"
            lineHeight={1}
            letterSpacing={'-0.2'}
            m={0}
          >
            London
          </Text.p>
          <Text.p
            fontSize={[2, 2, 4]}
            fontFamily="SoleilLt"
            lineHeight={3}
            letterSpacing={0}
            mt={[3, 3, 1]}
            mb={3}
          >
            Serverless Workshop
          </Text.p>
        </Box>
      </ResponsiveStack>
    </Box>
  </HeroWrapper>
)

export default WorkshopForm