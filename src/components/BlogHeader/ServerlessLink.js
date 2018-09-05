import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Box, Text } from 'serverless-design-system/src'

const LinkWrapper = styled(Box)`
  transition: height 0.5s;
  overflow: hidden;
`

export default ({ isNavbarShrinked }) => (
  <LinkWrapper height={[0, 0, isNavbarShrinked ? 0 : 15 ]}>
    <Link to="/">
      <Text.p
        my={0}
        fontSize={0}
        color="white"
        opacity={0.5}
      >
        &larr; serverless.com
      </Text.p>
    </Link>
  </LinkWrapper>
)
