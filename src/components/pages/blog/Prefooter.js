import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
  TextField,
  Button,
  TertiaryButton,
  Card,
} from 'serverless-design-system/src'
import blogFooterBackground from 'src/assets/images/blog-footer-background.png'

export default () => (
  <React.Fragment>
    <Relative
      display={['none', 'none', 'block']}
      top='-320px'
      mb='-290px'
    >
      <Background
        background={`url(${blogFooterBackground})`}
        backgroundSize="cover"
      >
        <ResponsiveStack>
          <Flex
            width={[1, 1, 0.5]}
            p={[1, 1, 5, 7]}
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
            p={[1, 1, 5, 7]}
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
              placeholderColor="white"
              fontFamily="Serverless"
              letterSpacing="text"
            />
            <TertiaryButton
              width={0.3}
              height={60}
              fontSize={1}
            >
              sign up
            </TertiaryButton>
          </Flex>
        </ResponsiveStack>
      </Background>
    </Relative>

    <Relative
      m={15}
      display={['block', 'block', 'none']}
      top='-360px'
      mb='-290px'
    >
      <Card border="1px solid #fd5750">
        <Background>
          <ResponsiveStack
            bg="#ffffffe6"
            py={2}
          >
            <Flex
              width={1}
              px={2}
              pb={2}
            >
              <Heading.h5
                fontFamily="SoleilLt"
                letterSpacing="0"
                lineHeight={2}
              >
                Join 12,000+ other serverless devs &amp; keep up to speed on the latest serverless trends.
              </Heading.h5>
            </Flex>
            <Flex.column
              alignItems="center"
              width={1}
              px={2}
            >
              <TextField
                width={1}
                height={60}
                bg="#8c8c8c33"
                border="none"
                px={2}
                fontSize={1}
                lineHeight={4}
                placeholder="enter email address"
                placeholderColor="white"
                fontFamily="Serverless"
                letterSpacing="text"
              />
              <Button
                width={0.5}
                height={60}
                fontSize={1}
              >
                sign up
              </Button>
            </Flex.column>
          </ResponsiveStack>
        </Background>
      </Card>
    </Relative>
  </React.Fragment>
)
