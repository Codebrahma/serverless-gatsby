import React from 'react'
import { Row, Column } from 'serverless-design-system/src'
import Default from 'src/layouts/Default'
import DocsWrapper from '../components/pages/doc/DocsWrapper'
import Sidebar from '../components/pages/doc/Sidebar'
import LiteHeader from '../components/pages/doc/LiteHeader'

export default ({ data: { doc }, location: { pathname } }) => (
  <Default>
    <DocsWrapper>
      <LiteHeader url={pathname} />
      <Row>
        <Sidebar head={doc.frontmatter} />
        <Column
          dangerouslySetInnerHTML={{ __html: doc.content }}
          className="content"
        />
      </Row>
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
        menuItems {
          menuText
          path
        }
      }
      content
    }
  }
`
