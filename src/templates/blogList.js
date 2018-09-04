import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import { BlogHeroWrapper } from 'src/fragments'

export default class Blogs extends React.Component {
  render() {
    return (
      <BlogLayout>
        <BlogHeroWrapper>
          <h1>Blogs</h1>
        </BlogHeroWrapper>
      </BlogLayout>
    )
  }
}

export const query = graphql`
  query Blogs($start: Int!, $limit: Int!) {
    allBlog (skip: $start, limit: $limit) {
      edges {
        node {
          id
        }
      }
      totalCount
    }
  }
`
