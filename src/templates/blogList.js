import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import HighlightedBlogs from 'src/components/pages/blog/HighlightedBlogs'
import BlogPreview from 'src/components/pages/blog/Preview'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import { Helmet } from 'src/fragments'
import { Pagination } from 'src/components'

export default ({
  data: { blogs: { edges, totalCount }, highlighted },
  pathContext: { start, limit }
}) => {
  const totalPages = Math.ceil(totalCount / limit)
  const currentPage = start/limit

  return (
    <BlogLayout prefooter={BlogListPrefooter}>
      <Helmet
        title="Serverless Blog"
        description="Articles, resources, and posts on serverless architectures, best practices, and how-to"
      />
      {
        currentPage === 0 && (
          <React.Fragment>
            <HighlightedBlogs blogs={highlighted.edges.map(({ node }) => node)} />
          </React.Fragment>
        )
      }
      <BlogPreview blogs={edges.map(({ node }) => node)} />
      <Pagination total={totalPages} current={currentPage} />
    </BlogLayout>
  )
}

export const query = graphql`
  query Blogs($start: Int!, $limit: Int!, $highlightedBlogsRegEx: String!) {
    blogs: allBlog (sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { date: { ne: null } } }, skip: $start, limit: $limit) {
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
          }
        }
      }
      totalCount
    }
    highlighted: allBlog(filter: { id: { regex: $highlightedBlogsRegEx } }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            authors
            category
            thumbnail
            heroImage
          }
        }
      }
    }
  }
`
