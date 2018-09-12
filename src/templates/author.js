import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import { Divider } from 'src/fragments'
import { getAuthorById } from 'src/utils/blog'
import Profile from 'src/components/pages/author/Profile'
import Blogs from 'src/components/pages/author/Blogs'

export default ({ data, pathContext: { authorId } }) => {
  const edges = data.allBlog ? (data.allBlog.edges || []) : []
  const author = getAuthorById(authorId)

  return (
    <BlogLayout prefooter={BlogListPrefooter}>
      <Profile author={author} />
      <Divider visibleInSmallScreens />
      <Blogs
        authorName={author.name.split(' ')[0]}
        blogs={edges.map(({ node }) => (node))}
      />
    </BlogLayout>
  )
}

export const query = graphql`
  query AuthorsBlogs($authorId: [String]) {
    allBlog (sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { date: { ne: null }, authors: {  in: $authorId } } }) {
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
