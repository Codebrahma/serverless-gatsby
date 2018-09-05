import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex } from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import Form from './Form';
import Pros from './Pros';

const Content = ({ theme }) => (
  <AppContainer>
    <Box
      pt={[
        theme.navbarHeights.mobile,
        theme.navbarHeights.mobile,
        theme.navbarHeights.desktop,
      ]}
    >
      <Flex.spaceBetween
        flexDirection={['column', 'column', 'row']}
        my={[5, 5, 5, 6]}
      >
        <Box width={[1, 1, 2/5]}>
          <Pros />
        </Box>
        <Box
          width={[1, 1, 1/2]}
          mt={[4, 4, 0]}
        >
          <Form />
        </Box>
      </Flex.spaceBetween>
    </Box>
  </AppContainer>
)

export default withTheme(Content);
