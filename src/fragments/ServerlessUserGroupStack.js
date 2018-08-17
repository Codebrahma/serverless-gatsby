import React from 'react'
import { Flex, P } from 'serverless-design-system/src'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'

import { breakpoints } from 'serverless-design-system/src/theme'

const breakpointCols = breakpoints.reduce((accumulator, bp, index) => {
  if (index !== breakpoints.length - 1) {
    accumulator[bp] = index
  }
  return accumulator
}, { 
  'default': breakpoints.length - 1
})

const FlexedMasonry = styled(Masonry)`
  display: flex;
  justify-content: center;
`

// Todo: Hard coded color
const ServerlessUserGroupStack = ({ items }) => (
  <FlexedMasonry
    breakpointCols={breakpointCols}
  >
    {
      items.map(({ title, location }, index) => (
        <Flex.column
          key={title}
          width={['70%', '70%', '280px']}
          mx='auto'
          my={2}
          px={3}
          py={3}
          boxShadow='2px 2px 8px 0 #eaeaea'
          border='1px solid #eaeaea'
          minHeight='128px'
          justifyContent='center'
        >
          <P fontSize={4} m={0}>
            {title}
          </P>
          <P fontSize={2} m={0}>
            {location}
          </P>
        </Flex.column>
      ))
    }
  </FlexedMasonry>
)

export default ServerlessUserGroupStack