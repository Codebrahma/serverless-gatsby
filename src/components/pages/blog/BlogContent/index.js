import React from 'react'
import { Box, Relative } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { getAuthorById } from 'src/utils/blog'
import AuthorCard from './AuthorCard'
import ContentWrapper from './ContentWrapper'
import Frontmatter from './Frontmatter'
import HeroImage from './HeroImage'
import SubscribeAndShareOptions from './SubscribeAndShareOptions'

export default ({ id, frontmatter, content }) => {
  const author = getAuthorById((frontmatter.authors || [])[0]) || {}

  return (
    <Box pb={[6, 6, 8]}>
      <AppContainer>
        <Relative width={1}>
          <Frontmatter frontmatter={frontmatter} />
          <HeroImage heroImage={frontmatter.heroImage} />
          <ContentWrapper
            width={[1, 1, 1, 0.65]}
            mx="auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <AuthorCard author={author} />
          <SubscribeAndShareOptions
            id={id}
            title={frontmatter.title}
          />
        </Relative>
      </AppContainer>
    </Box>
  )
}
