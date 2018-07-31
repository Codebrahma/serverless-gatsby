import React from 'react'
import Link from 'gatsby-link'

import { Logo, Header } from 'serverless-design-system/src';

const IndexPage = () => (
  <div>
    <Header
      logo={
        <Logo
          src='https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png'
          height="30px"
          width="170px"
          alt="Serverless"
        />
      }
      menu={[{name: 'platform'}]}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
