import React from 'react'
import { Text, Heading, Column, Row, Image } from 'serverless-design-system/src'
import BlogLayout from 'src/layouts/Blog'
import { AppContainer } from 'src/components'
import AuthorsData from 'src/pages/blog/generated-authors.json'

export default ({ data: { blog: { id, frontmatter, content } } }) => (
  <BlogLayout>
    <AppContainer>
      <Column
        width={[1, 1, 1, 0.65]}
        mx="auto"
        my={4}
        alignItems="center"
      >
        <Text.p
          fontFamily="Serverless"
          fontSize={1}
          opacity="0.4"
          my={25}
        >
          { frontmatter.category || 'news' }
        </Text.p>
        <Heading.h1
          fontFamily="SoleilBk"
          letterSpacing="h4"
          align="center"
        >
          { frontmatter.title }
        </Heading.h1>
        <Row
          alignItems="center"
          my={15}
        >
          <Text
            fontFamily="Soleil"
            fontSize={0}
            color="gray.3"
            lineHeight={2}
          >
            written by &nbsp;
          </Text>
          <Image
            src="https://avatars3.githubusercontent.com/u/15029531?v=4&s=460"
            height={33}
            width={33}
          />
          <Text
            fontFamily="Soleil"
            fontSize={0}
            color="gray.3"
            lineHeight={2}
          >
            &nbsp; Adnan Rahic
          </Text>
        </Row>
      </Column>
      <Column
        width={[1, 1, 1, 0.65]}
        mx="auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </AppContainer>
  </BlogLayout>
);

export const query = graphql`
  query BlogDetails($blogId: String!) {
    blog(id: { eq: $blogId }) {
      id
      frontmatter {
        title
        description
        authors
        thumbnail
        gitLink
        category
      }
      content
    }
  }
`
