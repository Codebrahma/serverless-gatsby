import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Column } from 'serverless-design-system/src'
import { BlogHeader as Header, Footer } from 'src/components'

const BlogLayout = ({ children, prefooter, transparentHeader }) => (
  <Column width={1}>
    <Header transparent={transparentHeader} />
    <Box
      width={1}
      pb={[300, 300, 300, 250]}
    >
      {children}
    </Box>
    <Footer prefooter={prefooter} />
  </Column>
)

export default withTheme(BlogLayout)