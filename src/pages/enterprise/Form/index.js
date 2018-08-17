import React from 'react'

import { Box, Button, Flex, InlineBlock } from 'serverless-design-system/src'

import Label from './Label'
import TextField from './TextField'
import SelectField from './SelectField'
import Checkbox from './Checkbox'
import TextArea from './TextArea'
import SubTitle from './../Pros/SubTitle'

export default () => (
  <Flex.column>
    <Box width={[ 1, 1, 5/7 ]}>
      <SubTitle>
        Interested in an enterprise demo? Let’s talk.
      </SubTitle>
    </Box>

    <Box my={3} width={1}>
      <TextField placeholder="Email" />
    </Box>

    <Flex.spaceBetween my={2}>
      <TextField
        width={48/100}
        placeholder="First Name"
      />
      <TextField
        width={48/100}
        placeholder="Last Name"
      />
    </Flex.spaceBetween>

    <Box my={2}>
      <TextField placeholder="Company Name" />
    </Box>

    <Box my={2}>
      <Label>
        How is your company currently using the Serverless Framework?
      </Label>
      <Box mt={2}>
        <SelectField
          options={[
            { label: 'In Development', value: 'In Development' },
            { label: 'In Production', value: 'In Production' },
            { label: 'Not at all', value: 'Not at all' },
          ]}
        />
      </Box>
    </Box>

    <Box my={2}>
      <Label>
        How many developers in your organization plan on doing serverless development?
      </Label>
      <Box mt={2}>
        <SelectField
          options={[
            { label: 'Less than 5', value: 'Less than 5' },
            { label: '5 - 15', value: '5 - 15' },
            { label: '15 - 30', value: '15 - 30' },
            { label: '30 - 100', value: '30 - 100' },
            { label: '100+', value: '100+' },
          ]}
        />
      </Box>
    </Box>

    <Box my={2}>
      <Label>
        Which infrastructure providers you are utilizing with the Serverless Framework?
      </Label>
      <Flex>
        <Box mt={2} width={1/2}>
          <Label htmlFor="aws">
            <Flex.verticallyCenter>
              <Checkbox name="infrastructure" id="aws" />
              <InlineBlock>AWS</InlineBlock>
            </Flex.verticallyCenter>
          </Label>
        </Box>
        <Box mt={2} width={1/2}>
          <Label htmlFor="google-cloud-platform">
            <Flex.verticallyCenter>
              <Checkbox name="infrastructure" id="google-cloud-platform" />
              <InlineBlock>Google Cloud Platform</InlineBlock>
            </Flex.verticallyCenter>
          </Label>
        </Box>
      </Flex>
      <Flex>
        <Box mt={2} width={1/2}>
          <Label htmlFor="azure">
            <Flex.verticallyCenter>
              <Checkbox name="infrastructure" id="azure" />
              <InlineBlock>Microsoft Azure</InlineBlock>
            </Flex.verticallyCenter>
          </Label>
        </Box>
        <Box mt={2} width={1/2}>
          <Label htmlFor="other">
            <Flex.verticallyCenter>
              <Checkbox name="infrastructure" id="other" />
              <InlineBlock>Other</InlineBlock>
            </Flex.verticallyCenter>
          </Label>
        </Box>
      </Flex>
    </Box>

    <Box my={2}>
      <TextArea placeholder="Please describe your Serverless use-case and any goals your team has with Serverless." />
    </Box>

    <Box my={4}>
      <Button width="120px">submit</Button>
    </Box>
  </Flex.column>
);
