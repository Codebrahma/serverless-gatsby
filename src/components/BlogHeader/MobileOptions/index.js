import React from 'react'
import { Box, Row } from 'serverless-design-system/src'
import NavButton from './NavButton'
import Search from './Search'

export default () => (
  <Box display={[ 'block', 'block', 'none' ]}>
    <Row>
      <Search />
      <NavButton />
    </Row>
  </Box>
)
