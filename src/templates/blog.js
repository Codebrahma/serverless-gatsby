import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import Prefooter from 'src/components/pages/blog/Prefooter'
import BlogContent from 'src/components/pages/blog/BlogContent'
import RelativeBlogs from 'src/components/pages/blog/RelativeBlogs'
import Comments from 'src/components/pages/blog/Comments'

export default ({ data: { blog } }) => (
  <BlogLayout prefooter={Prefooter}>
    <BlogContent { ...blog } />
    <RelativeBlogs blogs={[blog, blog]} />
    <Comments />
  </BlogLayout>
)

export const query = graphql`
  query BlogDetails($blogId: String!) {
    blog(id: { eq: $blogId }) {
      id
      frontmatter {
        title
        date,
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
