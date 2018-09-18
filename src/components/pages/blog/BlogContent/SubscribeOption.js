import React from 'react'
import styled from 'styled-components'
import { Position, Absolute, Button } from 'serverless-design-system/src'

const ButtonWithNoOutline = styled(Button)`
  &:focus {
    outline: none;
  }
`

export default class SubscribeOption extends React.Component {
  scrollIntoNewsLetter = () => {
    const newsletterField =  document.getElementById('newsletter-box')
    newsletterField.scrollIntoView()
  }

  render() {
    return (
      <Position
        position="sticky"
        top="50%"
        height={20}
        width={1}
      >
        <Absolute
          right={0}
          style={{
            transform: 'rotate(270deg) translate(0, -100%)',
            transformOrigin: '100% 0'
          }}
        >
          <ButtonWithNoOutline
            py={1}
            width={180}
            onClick={this.scrollIntoNewsLetter}
          >
            subscribe
          </ButtonWithNoOutline>
        </Absolute>
      </Position>
    )
  }
}
