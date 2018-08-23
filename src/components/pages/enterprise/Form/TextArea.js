import React from 'react'
import { TextArea } from 'serverless-design-system/src'

export default (props) => (
  <TextArea
    height="150px"
    width="100%"
    border="none"
    fontFamily="Serverless"
    fontSize={2}
    fontWeight="normal"
    lineHeight={4}
    letterSpacing="h2"
    color="gray.2"
    background="rgba(39, 39, 39, .05)"
    px="14.5px"
    py="10px"
    {...props}
  />
)
