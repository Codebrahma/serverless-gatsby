import React from 'react'

import { Box, Text, ResponsiveStack, Button, Flex, Heading } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../HeroTabs'

const ExamplesHero = () => (
  <HeroWrapper
    background={`black`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Box mb={[2, 2, 7]}>
      <HeroTabs
      // selected="examples-and-guides"
      />
    </Box>

    <ResponsiveStack
      mb={[2, 2, 4, 9]}
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
          Examples
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
        </Text.p>
        
        <Button
          textAlign='center'
          border={0}
          fontSize={3}
          p={15}
          width={[2/3]}
        >
          submit your example
        </Button>
      </Box>
    </ResponsiveStack>
  
    <Box
      mb={[1, 1, 2, 2]}
      color="white"
    >
      <Heading.h3
            fontSize={[4, 4, 4, 6]}
            fontFamily="SoleilBk"
            letterSpacing="h4"
            align="center"
          >
        Highlighted examples
      </Heading.h3>
    </Box>

    <Flex.horizontallyCenter>
      <Box
        mb={[2, 2, 4, 5]}
        width={[1/2]}
      >
        <Text.p
          color="#5b5b5b"
          fontSize={[1, 1, 2]}
          fontFamily="Soleil"
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
          mb={8}
          align="center"
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text.p>
      </Box>
    </Flex.horizontallyCenter>
  </HeroWrapper>
)

export default ExamplesHero