import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import background from 'src/assets/images/company-overview-background.png'

const ChampionsHero = () => (
  <HeroWrapper
    background={`black url(${background})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs selected="champions" />
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
          Champions
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
          At Serverless, we value open source. We are incredibly proud of the way the Serverless community steps up to the plate on a daily basis to contribute to the project and help guide newcomers.
          <br />
          <br />
          <br />
          To recognize our community superstars, we established The Serverless Champions program.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default ChampionsHero