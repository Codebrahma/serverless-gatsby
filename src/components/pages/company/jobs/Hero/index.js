import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import background from 'src/assets/images/company-overview-background.png'

const JobsHero = () => (
  <HeroWrapper
    background={`url(${background})`}
    backgroundSize="contain"
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs selected="jobs" />
    </Box>

    <ResponsiveStack
      mb={7}
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
          Jobs
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
          We empower developers to do more with less. Working at Serverless means that you’ll be surrounded by team members who are passionate about democratizing the serverless movement.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default JobsHero