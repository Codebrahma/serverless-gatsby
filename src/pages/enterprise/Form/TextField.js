import React from 'react'
import styled from 'styled-components'

import { TextField } from 'serverless-design-system/src'

const TextFieldWithNoOutLine = styled(TextField)`
  &:focus {
    outline: none;
  }
`;

export default (props) => (
  <TextFieldWithNoOutLine
    p={'15px'}
    width={1}
    border="0"
    bg="rgba(39, 39, 39, 0.05)"
    webkitAppearance="none"
    placeholderFontFamily="Serverless"
    placeholderFontSize={2}
    placeholderFontWeight="normal"
    placeholderLineHeight={4}
    placeholderLetterSpacing={"h2"}
    height="50px"
    {...props}
  />
)
