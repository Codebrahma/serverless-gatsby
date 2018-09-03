import React from 'react'

export default class Blog extends React.Component {
  render() {
    const { blog } = this.props.data;
    return (
      <div>
        <h1>{blog.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    );
  }
}
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
