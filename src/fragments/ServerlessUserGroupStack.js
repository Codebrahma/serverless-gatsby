import React from 'react'
import { Card, Column, Heading, P } from 'serverless-design-system/src'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'

import { breakpoints } from 'serverless-design-system/src/theme'

const breakpointCols = breakpoints.reduce((accumulator, bp, index) => {
  if (index < 2) {
    accumulator[bp] = 2;
    return accumulator;
  }
  if (index !== breakpoints.length - 1) {
    accumulator[bp] = index + 1;
    return accumulator;
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
        <Column
          key={`${title}-${index}`}
          width={['90%', '90%', '90%']}
          mx='auto'
          my={[1, 1, 2]}
          minHeight='128px'
          justifyContent='center'
        >
          <Card
            boxShadow='2px 2px 8px 0 #eaeaea'
            border='1px solid #eaeaea'
            p={[2, 2, 3]}
          >
            <Heading.h5
              fontFamily="SoleilBk"
              fontSize={[2, 2, 4]}
              m={0}
              color="black"
            >
              {title}
            </Heading.h5>
            <P
              fontSize={[0, 0, 2]}
              mt={1}
              mb={0}
            >
              {location}
            </P>
          </Card>
        </Column>
      ))
    }
  </FlexedMasonry>
)

export default ServerlessUserGroupStack