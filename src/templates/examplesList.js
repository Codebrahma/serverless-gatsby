import React from 'react'
import DefaultLayout from 'src/layouts/Default'
import HighlightedBlogs from 'src/components/pages/blog/HighlightedBlogs'
import Content from 'src/components/pages/examples/Content'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import { Divider } from 'src/fragments'
import { Pagination } from 'src/components'

import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/examples/Hero'
import Prefooter from 'src/components/pages/examples/Prefooter'

export default class Blogs extends React.Component {
  render() {
    let {
      data: { allMarkdownRemark: { edges, totalCount } },
      pathContext: { start, limit }
    } = this.props
    edges = edges.filter(data => data.node.frontmatter.title !== '')
    const totalPages = Math.ceil(totalCount / limit)
    const currentPage = start/limit

    return (
      <DefaultLayout prefooter={Prefooter} transparentHeader>
        <Hero />
        <Content examples={edges.map(({ node }) => node)} />
        <Pagination total={totalPages} current={currentPage} />
      </DefaultLayout>
    )
  }
}

export const query = graphql`
  query Examples($start: Int!, $limit: Int!) {
    allMarkdownRemark(skip: $start, limit: $limit) {
      totalCount
      edges {
          node {
            frontmatter {
              title
              description
            }
            excerpt
          }
      }
    }
  }
`
