import React from 'react'
import { Flex, Heading } from 'serverless-design-system/src'
import BlogLayout from 'src/layouts/Blog'
import BlogPreview from 'src/components/pages/blog/Preview'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import CategoryData from 'src/constants/categories.json'

export default class Authors extends React.Component {
  render() {
    const { data, pathContext: { categoryId } } = this.props
    const edges = data.allBlog ? (data.allBlog.edges || []) : []
    const category = CategoryData[categoryId]

    return (
      <BlogLayout prefooter={BlogListPrefooter}>
        <Flex.center py={2}>
          <Heading.h2
            fontSize={[4, 4, 6]}
            fontFamily="SoleilSb"
            align="center"
            lineHeight={1.4}
            letterSpacing="0"
          >
            Posts under {category}
          </Heading.h2>
        </Flex.center>
        <BlogPreview blogs={edges.map(({ node }) => node)} />
      </BlogLayout>
    )
  }
}

export const query = graphql`
  query CategoriesBlogs($categoryId: [String]) {
    allBlog (sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { date: { ne: null }, category: {  in: $categoryId } } }) {
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
