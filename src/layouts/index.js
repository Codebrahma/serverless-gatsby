import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from 'serverless-design-system/src/theme';
import { Flex, Box } from 'serverless-design-system/src';
import serverless from '../components/assets/serverless.otf';
import soleil from '../components/assets/soleil.otf';
import soleilBk from '../components/assets/soleil-bk.otf';
import soleilSb from '../components/assets/soleil-sb.otf';
import { Header, Footer } from '../components';
import './index.css';

injectGlobal`
  @font-face {
    font-family: "Serverless";
    font-weight: normal;
    font-style: normal;
    src: local("Serverless"),
    local("Serverless-Regular"),
    url("https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/serverless.otf") format("opentype");
  }

  @font-face {
    font-family: "SoleilBk";
    font-weight: normal;
    font-style: normal;
    src: local("SoleilBk"),
    local("Soleil-Book"),
    url("https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/soleil-bk.otf") format("opentype");
  }

  @font-face {
    font-family: "SoleilSb";
    font-weight: normal;
    font-style: normal;
    src: local("SoleilSB"),
    local("Soleil-Small-Book"),
    url("https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/soleil-sb.otf") format("opentype");
  }

  @font-face {
    font-family: "Soleil";
    font-weight: normal;
    font-style: normal;
    src: local("Soleil"),
    local("Soleil"),
    url("https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/soleil.otf") format("opentype");
  }

  @font-face {
    font-family: "SoleilBk-Italic";
    font-weight: normal;
    font-style: normal;
    src: local("SoleilBk-Italic"),
    url("https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/fonts/soleil-bk-italic.otf") format("opentype");
  }
`;

const Layout = ({ children, data }) => (
  <Flex>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <Flex>
        <Header />
        <Box
          display={['block', 'block', 'flex', 'flex', 'flex']}
          px="20px"
          m="auto"
          flexWrap="wrap"
          maxWidth="1260px"
          mb={['35px', '35px', '300px', '300px', '300px']}
        >
          {children()}
        </Box>
        <Footer />
      </Flex>
    </ThemeProvider>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
