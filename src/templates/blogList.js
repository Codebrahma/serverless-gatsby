import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import HighlightedBlogs from 'src/components/pages/blog/HighlightedBlogs'
import BlogPreview from 'src/components/pages/blog/Preview'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import { Divider } from 'src/fragments'
import { Pagination } from 'src/components'

export default class Blogs extends React.Component {
  render() {
    const {
      data: { blogs: { edges, totalCount }, highlighted },
      pathContext: { start, limit }
    } = this.props

    const totalPages = Math.ceil(totalCount / limit)
    const currentPage = start/limit

    return (
      <BlogLayout prefooter={BlogListPrefooter}>
        { currentPage === 0 && (
            <React.Fragment>
              <HighlightedBlogs blogs={highlighted.edges.map(({ node }) => node)} />
              <Divider visibleInSmallScreens />
            </React.Fragment>
          )
        }
        <BlogPreview blogs={edges.map(({ node }) => node)} />
        <Pagination total={totalPages} current={currentPage} />
      </BlogLayout>
    )
  }
}

export const query = graphql`
  query Blogs($start: Int!, $limit: Int!) {
    blogs: allBlog (skip: $start, limit: $limit) {
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

    highlighted: allBlog(filter: { frontmatter: { highlighted: { eq: true } } }) {
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
          }
        }
      }
    }
  }
`
