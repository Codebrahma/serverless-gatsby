import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import HighlightedBlogs from 'src/components/pages/blog/HighlightedBlogs'

export default class Blogs extends React.Component {
  render() {
    return (
      <BlogLayout>
        <HighlightedBlogs />
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
