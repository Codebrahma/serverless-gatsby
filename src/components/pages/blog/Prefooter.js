import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
  TextField,
  TertiaryButton,
} from 'serverless-design-system/src'

export default () => (
  <Relative
    top='-320px'
    mb='-290px'
  >
    <Background>
      <ResponsiveStack bg="#fc5650e6">
        <Flex
          width={[1, 1, 0.5]}
          p={7}
          pr={2}
        >
          <Heading.h4
            color="white"
            fontFamily="SoleilLt"
            letterSpacing="0"
            lineHeight={2}
          >
            Join 12,000+ other serverless devs &amp; keep up to speed on the latest serverless trends.
          </Heading.h4>
        </Flex>
        <Flex
          justifyContent="flex-end"
          width={[1, 1, 0.5]}
          p={7}
          pl={2}
        >
          <TextField
            width={0.6}
            height={60}
            bg="#ffffff33"
            border="none"
            px={2}
            fontSize={1}
            lineHeight={4}
            placeholder="enter email address"
            fontFamily="Serverless"
            letterSpacing="text"
          />
          <TertiaryButton
            width={0.3}
            height={60}
          >
            sign up
          </TertiaryButton>
        </Flex>
      </ResponsiveStack>
    </Background>
  </Relative>
)
