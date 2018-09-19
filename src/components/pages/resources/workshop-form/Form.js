import React from 'react'
import styled from 'styled-components'
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
  P,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import formHandler from 'src/utils/formHandler'
import dotGridGrey from 'src/assets/images/dot-grid-grey.png'
import TextField from '../../enterprise/Form/TextField'
import Checkbox from '../../enterprise/Form/Checkbox'
import Label from '../../enterprise/Form/Label'
import TextArea from '../../enterprise/Form/TextArea'
import RadioButton from '../../enterprise/Form/RadioButton'

const Paragraph = styled(P)`
  a {
    border-bottom: 1px solid #5b5b5b;
  }
  a:hover {
    color: #8c8c8c;
  }
`

const CheckboxWithLabel = ({ id, name, text, onChange }) => (
  <Label htmlFor={id}>
    <Flex.verticallyCenter my="12px">
      <Checkbox name={name} id={id} onChange={onChange} />
      <InlineBlock>{text}</InlineBlock>
    </Flex.verticallyCenter>
  </Label>
)

const RadioButtonWithLabel = ({ id, name, text, onChange }) => (
  <Label htmlFor={id}>
    <Flex.verticallyCenter my="8px">
      <RadioButton
        name={name}
        id={id}
        onChange={onChange}
        required
      />
      <InlineBlock>{text}</InlineBlock>
    </Flex.verticallyCenter>
  </Label>
)

export default class WorkshopForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      success: false,
      name: '',
      company: '',
      email: '',
      experience: '',
      poi: {
        aws: false,
        google_cloud_platform: false,
        microsoft_azure: false,
      },
      language: {
        node_js: false,
        python: false,
        java: false,
        ruby: false,
        php: false,
        go: false,
      },
      serverless_goals: '',
    }
  }

  updateCheckbox = (key, innerKey, value) => (
    this.setState({ [key] : { ...this.state[key], [innerKey] : value } })
  )

  onSubmit = (event) => {
    event.preventDefault()
    const formId = `${this.props.keyName}-workshop`
    const { name, email, company, experience, serverless_goals } = this.state

    this.setState({
      loading: true
    })

    const poi = Object.keys(this.state.poi)
      .filter((p) => this.state.poi[p])
      .map((p) => p.replace(/_/g, ' '))
    const language = Object.keys(this.state.language)
      .filter((p) => this.state.language[p])
      .map((p) => p.replace(/_/g, ' '))

    const formData = {
      formId,
      fields: {
        name,
        email,
        company,
        experience,
        serverless_goals,
        poi,
        language
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('Form ID', formId)
      console.log('Form data', formData)
      return false
    }

    formHandler(formData).then((res) => {
      this.setState({
        success: true,
        loading: false
      }, () => {
        window.scrollTo(0, 0)
      })
    }).catch((e) => {
      this.setState({
        success: false,
        loading: false,
        error: e
      })
    })

    return false
  }

  render() {
    const { loading, success } = this.state

    if (success) {
      return (
        <AppContainer>
          <Flex.center
            mt={5}
            mb={[300, 300, 14]}
          >
            <Box width={[1, 1, 1, 0.8]}>
              <Paragraph align="center">
                Great! You’re now on the waitlist for one of our workshops. If you’re new to Serverless, why not <a href='https://serverless.com/framework/docs/'>check out our documentation</a> to get started, or head on <a href='https://serverless.com/blog/'>over to our blog?</a>
              </Paragraph>
            </Box>
          </Flex.center>
        </AppContainer>
      )
    }

    const buttonText = (loading) ? 'loading' : 'submit'

    return (
      <form onSubmit={this.onSubmit}>
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
                <TextField
                  placeholder="full name"
                  onChange={({ target }) => this.setState({ name: target.value })}
                  required
                />
              </Column>
              <Column width={[1, 1, 3/10]} py={1}>
                <TextField
                  placeholder="email address"
                  onChange={({ target }) => this.setState({ email: target.value })}
                  required
                />
              </Column>
              <Column width={[1, 1, 3/10]} py={1}>
                <TextField
                  placeholder="company"
                  onChange={({ target }) => this.setState({ company: target.value })}
                  required
                />
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
                  <RadioButtonWithLabel
                    id="none"
                    name="experience"
                    text="none"
                    onChange={() => this.setState({ experience: 'none' })}
                  />
                  <RadioButtonWithLabel
                    id="played-around"
                    name="experience"
                    text="i’ve played around with it"
                    onChange={() => this.setState({ experience: 'beginner' })}
                  />
                  <RadioButtonWithLabel
                    id="serverless-in-prod"
                    name="experience"
                    text="i run serverless in production"
                    onChange={() => this.setState({ experience: 'professional' })}
                  />
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
                  {
                    ['aws', 'google_cloud_platform', 'microsoft_azure'].map((poi) => (
                      <CheckboxWithLabel
                        id={poi}
                        key={poi}
                        name="poi"
                        text={poi.replace(/_/g, ' ')}
                        onChange={({ target }) => this.updateCheckbox('poi', poi, target.value)}
                      />
                    ))
                  }
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
                  {
                    ['node_js', 'python', 'java', 'ruby', 'php', 'go'].map((lang) => (
                      <CheckboxWithLabel
                        id={lang}
                        key={lang}
                        name="language"
                        text={lang.replace(/_/g, ' ')}
                        onChange={({ target }) => this.updateCheckbox('language', lang, target.value)}
                      />
                    ))
                  }
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
                  onChange={({ target }) => this.setState({ serverless_goals: target.value })}
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
                <Button>{buttonText}</Button>
              </Column>
            </Row>
          </Box>
        </AppContainer>
      </form>
    )
  }
}
