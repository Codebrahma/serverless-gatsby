import React from 'react'
import { Flex, Heading } from 'serverless-design-system/src'
import BlogPreview from "src/components/pages/blog/Preview"

export default ({ authorName, blogs }) => (
  <React.Fragment>
    <Flex.center py={2}>
      <Heading.h2
        fontSize={[4, 4, 6]}
        fontFamily="SoleilSb"
        align="center"
        lineHeight={1.4}
        letterSpacing="0"
      >
        Posts from {authorName.split(" ")[0]}
      </Heading.h2>
    </Flex.center>
    <BlogPreview blogs={blogs} />
  </React.Fragment>
)
