import React from 'react'
import BlogLayout from 'src/layouts/Blog'
import Prefooter from 'src/components/pages/blog/Prefooter'
import BlogContent from 'src/components/pages/blog/BlogContent'
import RelativeBlogs from 'src/components/pages/blog/RelativeBlogs'
import Comments from 'src/components/pages/blog/Comments'
import { Helmet } from 'src/fragments'

export default ({ data: { currentBlog, previousBlog, nextBlog }, location }) => (
  <BlogLayout prefooter={Prefooter}>
    <Helmet
      {...currentBlog.frontmatter}
      location={location}
    />
    <BlogContent { ...currentBlog } />
    <RelativeBlogs blogs={[previousBlog, nextBlog]} />
    <Comments />
  </BlogLayout>
)

export const query = graphql`
  query BlogDetails($blogId: String!, $previousBlogId: String!, $nextBlogId: String!) {
    currentBlog: blog (id: { eq: $blogId }) {
      id
      frontmatter {
        title
        date,
        description
        authors
        thumbnail
        gitLink
        category
        heroImage
      }
      content
    }

    previousBlog: blog(id: { eq: $previousBlogId }) {
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
    }

    nextBlog: blog(id: { eq: $nextBlogId }) {
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
    }
  }
`
