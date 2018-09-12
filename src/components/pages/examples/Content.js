import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex, Text, Heading, Row} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import Search from './Search'
import ExamplePreview from './SingleExamplePreview'

const Content = ({ examples }) => (
  <AppContainer>
    <Box
      mt={[-100, -100, -100, -150]}
    >
      <Flex
        flexDirection={['column', 'column', 'row']}
      >
        { examples.splice(1, 3).map((example, index) => (<ExamplePreview key={`example-${index}`} {...example} />)) }
      </Flex>
    </Box>
    
    <Box
      pb={[300, 300, 12, 12]}
    >
    
      <Box
        mt={[6]}
        mb={[4, 4, 2]}
        color="black"
      >
         <Heading.h3
              fontSize={[4, 4, 4, 6]}
              fontFamily="SoleilBk"
              letterSpacing="h4"
              align="center"
            >
          All the examples
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
            align="center"
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text.p>
        </Box>
      </Flex.horizontallyCenter>

      <Search />

      <Flex
        flexDirection={['column', 'column', 'row']}
        flexWrap="wrap"
      >
        
          { examples.map((example, index) => (<ExamplePreview key={`example-${index}`} {...example} />)) }
      </Flex>
    </Box>
  </AppContainer>
)

export default withTheme(Content);

