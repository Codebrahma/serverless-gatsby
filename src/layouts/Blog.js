import React from 'react'

import { Box, Column } from 'serverless-design-system/src'
import { BlogHeader as Header, Footer } from 'src/components'

const BlogLayout = ({ children, prefooter, transparentHeader }) => (
  <Column width={1}>
    <Header transparent={transparentHeader} />
    <Box width={1}>{children}</Box>
    <Footer prefooter={prefooter} />
  </Column>
)

export default BlogLayout