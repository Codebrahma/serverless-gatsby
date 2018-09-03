import React from 'react'
import BlogLayout from '../layouts/Blog'

export default class Blogs extends React.Component {
  render() {
    return (
      <BlogLayout>
        <h1>Blogs</h1>
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
