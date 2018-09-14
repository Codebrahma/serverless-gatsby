import React from 'react'
import styled from 'styled-components'

const Pointer = styled.span`
  cursor: pointer;
  color: ${({ color }) => (color)}
  &:hover {
    color: ${({ hoverColor }) => (hoverColor)}
  }
`

export default ({ children, to, ...otherProps }) => (
  <Pointer
    onClick={() => window.open(to)}
    { ...otherProps }
  >
    { children }
  </Pointer>
)
