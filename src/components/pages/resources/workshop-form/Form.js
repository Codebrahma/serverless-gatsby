import React from 'react'
import {
  Box,
  Flex,
  Column,
  Heading,
  InlineBlock,
  Button,
  Row,
  ResponsiveStack,
  TextWithIcon,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import dotGridGrey from 'src/assets/images/dot-grid-grey.png'
import TextField from '../../enterprise/Form/TextField'
import Checkbox from '../../enterprise/Form/Checkbox'
import Label from '../../enterprise/Form/Label'
import TextArea from '../../enterprise/Form/TextArea'
import RadioButton from '../../enterprise/Form/RadioButton'

export default () => (
  <AppContainer>
    <Box
      mt={5}
      mb={[300, 300, 14]}
    >
      <Row>
        <TextWithIcon
          iconSrc={dotGridGrey}
          iconHeight="35px"
          iconWidth="65px"
          iconLeft="-10px"
          iconTop="-5px"
          backgroundSize="contain"
        >
          <Heading.h4
            fontFamily="SoleilBk"
            lineHeight={3}
          >
            Contact Information
          </Heading.h4>
        </TextWithIcon>
      </Row>
      <ResponsiveStack
        justifyContent="space-between"
        py={1}
      >
        <Column width={[1, 1, 3/10]} py={1}>
          <TextField placeholder="full name" />
        </Column>
        <Column width={[1, 1, 3/10]} py={1}>
          <TextField placeholder="email address" />
        </Column>
        <Column width={[1, 1, 3/10]} py={1}>
          <TextField placeholder="company" />
        </Column>
      </ResponsiveStack>
      <ResponsiveStack
        justifyContent="space-between"
        py={1}
      >
        <Column width={[1, 1, 3/10]} py={1}>
          <TextWithIcon
            iconSrc={dotGridGrey}
            iconHeight="35px"
            iconWidth="65px"
            iconLeft="-10px"
            iconTop="-5px"
            backgroundSize="contain"
          >
            <Heading.h4
              fontFamily="SoleilBk"
              lineHeight={3}
            >
              Serverless Experience
            </Heading.h4>
          </TextWithIcon>
          <Box>
            <Label htmlFor="none">
              <Flex.verticallyCenter my="8px">
                <RadioButton name="experience" id="none" />
                <InlineBlock>none</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="played-around">
              <Flex.verticallyCenter my="8px">
                <RadioButton name="experience" id="played-around" />
                <InlineBlock>i’ve played around with it</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="serverless-in-prod">
              <Flex.verticallyCenter my="8px">
                <RadioButton name="experience" id="serverless-in-prod" />
                <InlineBlock>i run serverless in production</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
          </Box>
        </Column>
        <Column width={[1, 1, 3/10]} py={1}>
          <TextWithIcon
            iconSrc={dotGridGrey}
            iconHeight="35px"
            iconWidth="65px"
            iconLeft="-10px"
            iconTop="-5px"
            backgroundSize="contain"
          >
            <Heading.h4
              fontFamily="SoleilBk"
              lineHeight={3}
            >
              Platforms of Interest
            </Heading.h4>
          </TextWithIcon>
          <Box>
            <Label htmlFor="aws">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="platform-interest" id="aws" />
                <InlineBlock>aws</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="google-cloud-platform">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="platform-interest" id="google-cloud-platform" />
                <InlineBlock>google cloud platform</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="microsoft-azure">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="platform-interest" id="microsoft-azure" />
                <InlineBlock>microsoft azure</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
          </Box>
        </Column>
        <Column width={[1, 1, 3/10]} py={1}>
          <TextWithIcon
            iconSrc={dotGridGrey}
            iconHeight="35px"
            iconWidth="65px"
            iconLeft="-10px"
            iconTop="-5px"
            backgroundSize="contain"
          >
            <Heading.h4
              fontFamily="SoleilBk"
              lineHeight={3}
            >
              Primary Development Languages
            </Heading.h4>
          </TextWithIcon>
          <Box>
            <Label htmlFor="node-js">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="dev-language" id="node-js" />
                <InlineBlock>node js</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="python">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="dev-language" id="python" />
                <InlineBlock>python</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="java">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="dev-language" id="java" />
                <InlineBlock>java</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="ruby">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="dev-language" id="ruby" />
                <InlineBlock>ruby</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="php">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="dev-language" id="php" />
                <InlineBlock>php</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
            <Label htmlFor="go">
              <Flex.verticallyCenter my="12px">
                <Checkbox name="dev-language" id="go" />
                <InlineBlock>go</InlineBlock>
              </Flex.verticallyCenter>
            </Label>
          </Box>
        </Column>
      </ResponsiveStack>

      <ResponsiveStack
        justifyContent="space-between"
        py={1}
      >
        <Column width={1}>
          <TextWithIcon
            iconSrc={dotGridGrey}
            iconHeight="35px"
            iconWidth="65px"
            iconLeft="-10px"
            iconTop="-5px"
            backgroundSize="contain"
          >
            <Heading.h4
              fontFamily="SoleilBk"
              lineHeight={3}
            >
              Tell us a little about your goals with serverless
            </Heading.h4>
          </TextWithIcon>
          <TextArea
            placeholder="My goals with serverless…"
            width={1}
          />
        </Column>
      </ResponsiveStack>

      <Row>
        <Column
          mt={5}
          alignItems="center"
          width={1}
        >
          <Button>submit</Button>
        </Column>
      </Row>
    </Box>
  </AppContainer>
)
