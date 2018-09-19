import React from 'react'
import styled from 'styled-components'
import { Heading } from 'serverless-design-system/src'

const HeadingWithMaxWidth = styled(Heading.h2)`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export default ({ children, ...otherProps }) => (
  <HeadingWithMaxWidth
    align="center"
    fontFamily="SoleilSb"
    fontSize={[5, 5, 6]}
    lineHeight={1.63}
    {...otherProps}
  >
    { children }
  </HeadingWithMaxWidth>
)
