import React from 'react'
import {
  Box,
  Background,
  Flex,
  Text,
} from 'serverless-design-system/src'

import HeaderWrapper from './Wrapper'
import Logo from './Logo'
import NewsLetterForm from './NewsLetterForm'
import SearchBar from './SearchBar'
import AppContainer from './../AppContainer'

export default () => (
  <HeaderWrapper
    width={1}
    maxHeight='100%'
    oy={['scroll', 'scroll', 'visible']}
  >
    <Background background="black">
      <Box
        pt={[2, 2, 1]}
        pb={[2, 2, 3]}>
        <AppContainer>
          <Box
            display={['none', 'none', 'block']}
          >
            <Text.p
              my={0}
              fontSize={0}
              color="white"
              opacity={0.5}
            >
              &larr; serverless.com
            </Text.p>
          </Box>

          <Flex.verticallyCenter
            flexWrap='wrap'
            justifyContent='space-between'
            py={15}
          >
            <Box width={[1, 1, 0.65]}>
              <Logo />
            </Box>
            <Box width={[1, 1, 0.35]}>
              <NewsLetterForm />
            </Box>
          </Flex.verticallyCenter>

          <SearchBar />
        </AppContainer>
      </Box>
    </Background>
  </HeaderWrapper>
)
