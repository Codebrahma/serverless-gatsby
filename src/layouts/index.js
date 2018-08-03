import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from 'serverless-design-system/src/theme';
import { Flex, Box } from 'serverless-design-system/src';
import { Header, Footer } from '../components';
import serverless from '../assets/fonts/serverless.otf';
import soleil from '../assets/fonts/soleil.otf';
import soleilBk from '../assets/fonts/soleil-bk.otf';
import soleilSb from '../assets/fonts/soleil-sb.otf';
import soleilBkItalic from '../assets/fonts/soleil-bk-italic.otf';
import './index.css';

injectGlobal`
  @font-face {
    font-family: "Serverless";
    font-weight: normal;
    font-style: normal;
    src: local("Serverless"),
    local("Serverless-Regular"),
    url('${serverless}') format("opentype");
  }

  @font-face {
    font-family: "SoleilBk";
    font-weight: normal;
    font-style: normal;
    src: local("SoleilBk"),
    local("Soleil-Book"),
    url('${soleilBk}') format("opentype");
  }

  @font-face {
    font-family: "SoleilSb";
    font-weight: normal;
    font-style: normal;
    src: local("SoleilSB"),
    local("Soleil-Small-Book"),
    url('${soleilSb}') format("opentype");
  }

  @font-face {
    font-family: "Soleil";
    font-weight: normal;
    font-style: normal;
    src: local("Soleil"),
    local("Soleil"),
    url('${soleil}') format("opentype");
  }

  @font-face {
    font-family: "SoleilBk-Italic";
    font-weight: normal;
    font-style: normal;
    src: local("SoleilBk-Italic"),
    url('${soleilBkItalic}') format("opentype");
  }
`;

const Layout = ({ children, data }) => (
  <Flex width={1}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection='column'
        width={1}
      >
        <Header />
        <Box
          display='block'
          width={1}
          mt={[
            theme.navbarHeights.mobile,
            theme.navbarHeights.mobile,
            theme.navbarHeights.desktop
          ]}
        >
          {children()}
          <Footer />
        </Box>
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
