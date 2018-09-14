import React from 'react'
import { Box, P } from 'serverless-design-system/src'
import { TitleWithIcon } from 'src/fragments'

export default ({ authorName, bio }) => (
  <Box width={[1, 1, 0.7]}>
    <TitleWithIcon>
      { authorName }
    </TitleWithIcon>
    <P>
      { bio }
    </P>
  </Box>
)
