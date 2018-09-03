import React from 'react'

export default class Blogs extends React.Component {
  render() {
    console.log(this.props);
    return (
      <h1>Blogs</h1>
    )
  }
}

export const query = graphql`
  query Blogs($start: Int!, $limit: Int!) {
    allBlog (skip: $start, limit: $limit) {
      edges {
        node {
          id
        }
      }
      totalCount
    }
  }
`
