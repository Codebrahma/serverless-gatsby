import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'

const getPointerForComponent = (comp) =>
  ((typeof comp === "string") ? styled[comp] : styled(comp))`
    cursor: pointer;
  `

export const getLinkComponent = (comp) => {
  const LinkComponent = getPointerForComponent(comp);
  return ({ to, ...otherProps }) => (
    <LinkComponent
      onClick={() => push(to)}
      { ...otherProps }
    />
  )
}

const SpanPointer = getPointerForComponent('span')

export default ({ children, to }) => (
  <SpanPointer onClick={() => push(to)}>
    { children }
  </SpanPointer>
)
