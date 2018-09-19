import React from 'react'
import Helmet from 'react-helmet'
import { Row, Column } from 'serverless-design-system/src'
import Default from 'src/layouts/Default'
import DocsWrapper from '../components/pages/doc/DocsWrapper'
import Sidebar from '../components/pages/doc/Sidebar'
import LiteHeader from '../components/pages/doc/LiteHeader'
import gitHubSvg from 'src/assets/images/githubIcon.svg'
import { Helmet as SEOHelmet } from 'src/fragments'

export default ({ data: { doc }, location }) => (
  <Default footerBackground={false}>
    <Helmet
      link={[
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
        }
      ]}
      script={[
        {
          src: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js', type: 'text/javascript'
        }
      ]}
    />

    <DocsWrapper>
      <SEOHelmet
        {...doc.frontmatter}
        location={location}
      />
      <LiteHeader url={location.pathname} />
      <Row className="docWrapper">
        <Sidebar head={doc.frontmatter} />
        <a
          title='Edit this page on github'
          rel='noopener noreferrer'
          href={`https://github.com/serverless/serverless/edit/master${doc.frontmatter.gitLink}`}
        >
          <span className='editLink'>
            <img src={gitHubSvg} />
            <span className='text'>Edit on github</span>
          </span>
        </a>
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
