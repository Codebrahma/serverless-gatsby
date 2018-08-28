import React from 'react'
import { Box, Container } from 'serverless-design-system/src'

export default ({ children }) => (
  <Container>
    <Box px={15}>
      { children }
    </Box>
  </Container>
)
