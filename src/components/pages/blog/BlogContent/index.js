import React from 'react'
import { Box } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { getAuthorById } from 'src/utils/blog'
import AuthorCard from './AuthorCard'
import ContentWrapper from './ContentWrapper'
import Frontmatter from './Frontmatter'

export default ({ id, frontmatter, content }) => {
  const author = getAuthorById((frontmatter.authors || [])[0]) || {}

  return (
    <Box pb={[6, 6, 8]}>
      <AppContainer>
        <Frontmatter frontmatter={frontmatter} />
        <ContentWrapper
          width={[1, 1, 1, 0.65]}
          mx="auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <AuthorCard author={author} />
      </AppContainer>
    </Box>
  )
}
