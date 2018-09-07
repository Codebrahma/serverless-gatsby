import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'

const Pointer = styled.span`
  cursor: pointer;
`

export default ({ children, to }) => (
  <Pointer onClick={() => push(to)}>
    { children }
  </Pointer>
)