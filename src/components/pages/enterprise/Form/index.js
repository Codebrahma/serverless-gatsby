import React from 'react'

import { Box, Button, Flex, InlineBlock, P } from 'serverless-design-system/src'

import formHandler from 'src/utils/formHandler'
import { validateEmail } from 'src/utils/validator'
import Label from './Label'
import TextField from './TextField'
import SelectField from './SelectField'
import Checkbox from './Checkbox'
import TextArea from './TextArea'
import SubTitle from './../Pros/SubTitle'
import track from 'src/utils/analytics/track'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      success: false,

      email: '',
      first_name: '',
      last_name: '',
      poi: '',
      developers_count: '',
      message: '',
      infrastructure: {
        'AWS' : false,
        'Google Cloud Platform' :  false,
        'Microsoft Azure' : false,
        'Other' :  false,
      }
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const formId = 'enterprise-contact-us'
    const {
      email,
      first_name,
      last_name,
      company,
      poi,
      developers_count,
      message,
    } = this.state;

    if (!validateEmail(email)) {
      alert('Please enter valid email address')
      return false
    }

    this.setState({ loading: true })
    const infras = Object.keys(this.state.infrastructure)
    const infrastructure = infras .filter((infra) => this.state.infrastructure[infra])

    const formData = {
      formId: formId,
      fields: { email, first_name, last_name, company, poi, developers_count, message, infrastructure }
    }

    formHandler(formData).then((res) => {
      this.setState({
        success: true,
        loading: false
      })
    }).catch((e) => {
      console.log('ERROR', e)
      this.setState({
        success: false,
        loading: false,
        error: e
      })
    })
    return false
  }

  updateInfrastructure = (fieldName, value) => {
    this.setState({
      infrastructure: { ...this.state.infrastructure, [ fieldName ] : value }
    })
  }

  render() {
    const { loading, success } = this.state

    if (success) {
      track('site:enterprise_contact', { category: 'Contact Form' })
      return (
        <Box>
          <P>
            Thanks we will be in touch shortly.
          </P>
        </Box>
      )
    }

    return (
      <form onSubmit={this.onSubmit}>
        <Flex.column>
          <Box width={[ 1, 1, 5/7 ]}>
            <SubTitle>
              Interested in an enterprise demo? Let’s talk.
            </SubTitle>
          </Box>

          <Box my={3} width={1}>
            <TextField
              placeholder="Email"
              name="email"
              onChange={({ target }) => this.setState({ email: target.value })}
              required
            />
          </Box>

          <Flex.spaceBetween my={2}>
            <TextField
              width={48/100}
              placeholder="First Name"
              name="first_name"
              onChange={({ target }) => this.setState({ first_name: target.value })}
              required
            />
            <TextField
              width={48/100}
              placeholder="Last Name"
              name="last_name"
              onChange={({ target }) => this.setState({ last_name: target.value })}
              required
            />
          </Flex.spaceBetween>

          <Box my={2}>
            <TextField
              placeholder="Company Name"
              name="company"
              onChange={({ target }) => this.setState({ company: target.value })}
              required
            />
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
                onChange={({ value }) => this.setState({ poi: value })}
                value={this.state.poi}
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
                onChange={({ value }) => this.setState({ developers_count: value })}
                value={this.state.developers_count}
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
                    <Checkbox
                      name="infrastructure"
                      id="aws"
                      onChange={({ target }) => this.updateInfrastructure('AWS', target.checked)}
                    />
                    <InlineBlock>AWS</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/2}>
                <Label htmlFor="google-cloud-platform">
                  <Flex.verticallyCenter>
                    <Checkbox
                      name="infrastructure"
                      id="google-cloud-platform"
                      onChange={({ target }) => this.updateInfrastructure('Google Cloud Platform', target.checked)}
                    />
                    <InlineBlock>Google Cloud Platform</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
            <Flex>
              <Box mt={2} width={1/2}>
                <Label htmlFor="azure">
                  <Flex.verticallyCenter>
                    <Checkbox
                      name="infrastructure"
                      id="azure"
                      onChange={({ target }) => this.updateInfrastructure('Microsoft Azure', target.checked)}
                    />
                    <InlineBlock>Microsoft Azure</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/2}>
                <Label htmlFor="other">
                  <Flex.verticallyCenter>
                    <Checkbox
                      name="infrastructure"
                      id="other"
                      onChange={({ target }) => this.updateInfrastructure('Other', target.checked)}
                    />
                    <InlineBlock>Other</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
          </Box>

          <Box my={2}>
            <TextArea
              placeholder="Please describe your Serverless use-case and any goals your team has with Serverless."
              name="message"
              onChange={({ target }) => this.setState({ message: target.value })}
            />
          </Box>

          <Box my={4}>
            <Button width="120px" disabled={loading}>
              { loading ? 'Loading' : 'submit' }
            </Button>
          </Box>
        </Flex.column>
      </form>
    )
  }
}
