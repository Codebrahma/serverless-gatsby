import React from 'react'
import { Column } from 'serverless-design-system/src'
import Default from 'src/layouts/Default'
import DocsWrapper from '../components/pages/doc/DocsWrapper';

export default (props) => (
  <Default>
    <DocsWrapper>
      <Column
        dangerouslySetInnerHTML={{ __html: props.data.doc.content }}
        className="content"
      />
    </DocsWrapper>
  </Default>
)

export const query = graphql`
  query Doc($docId: String!) {
    doc(id: { eq: $docId }) {
      id
      frontmatter {
        title
        menuText
        layout
        menuOrder
        gitLink
        description
      }
      content
    }
  }
`
