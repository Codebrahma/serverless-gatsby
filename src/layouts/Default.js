import React from 'react';

import { Box, Flex } from 'serverless-design-system/src';
import theme from 'serverless-design-system/src/theme';
import { Header, Footer } from '../components';

export default ({ children, prefooter }) => (
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
      { children }
    </Box>
    <Footer prefooter={prefooter} />
  </Flex>
);
