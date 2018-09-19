import React from 'react'
import styled from 'styled-components'
import { TextField } from 'serverless-design-system/src'

const TextFieldWithNoOutline = styled(TextField)`
  &:focus {
    outline: none;
  }
`

export default class EmailField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { placeholder: props.placeholder }
  }

  clearPlaceholder = () => this.setState({ placeholder: '' })
  restorePlaceholder = () => {
    this.setState({ placeholder: this.props.placeholder })
  }

  render() {
    return (
      <TextFieldWithNoOutline
        color='white'
        bg='gray.3'
        border='none'
        fontSize={3}
        letterSpacing='textField'
        lineHeight={4}
        opacity='0.2'
        px={[1, 1, 1]}
        py={15}
        m={0}
        width={[1, 1, 0.6]}
        borderRadius={0}
        fontSize={2}
        fontFamily="Serverless"
        placeholderColor="white"
        {...this.props}
        onFocus={this.clearPlaceholder}
        onBlur={this.restorePlaceholder}
        placeholder={this.state.placeholder}
      />
    )
  }
}
