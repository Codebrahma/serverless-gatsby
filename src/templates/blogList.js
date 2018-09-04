import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import HighlightedBlogs from 'src/components/pages/blog/HighlightedBlogs'
import BlogPreview from 'src/components/pages/blog/Preview'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import { Divider } from 'src/fragments'

export default class Blogs extends React.Component {
  render() {
    const { data: { allBlog: { edges } } } = this.props

    return (
      <BlogLayout prefooter={BlogListPrefooter}>
        <HighlightedBlogs />
        <Divider />
        <BlogPreview blogs={edges.map(({ node }) => node)} />
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
          frontmatter {
            title
            description
            date
            authors
            thumbnail
            category
            featured
          }
        }
      }
      totalCount
    }
  }
`
