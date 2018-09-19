import React from 'react'
import { Box } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import BlogPreview from './SingleBlogPreview'

export default ({ blogs }) => (
  <AppContainer>
    <Box
      width={[1, 1, 1, 0.8]}
      mx="auto"
    >
      { blogs.map((blog, index) => (<BlogPreview key={`blog-${index}`} {...blog} />)) }
    </Box>
  </AppContainer>
)
