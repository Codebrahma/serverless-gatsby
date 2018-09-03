import React from 'react'
import BlogLayout from '../layouts/Blog'

export default ({ data: { blog } }) => (
  <BlogLayout>
    <h1>{blog.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
  </BlogLayout>
);

export const query = graphql`
  query BlogDetails($blogId: String!) {
    blog(id: { eq: $blogId }) {
      id
      frontmatter {
        title
        description
        date
        layout
        thumbnail
        gitLink
        category
      }
      content
    }
  }
`
