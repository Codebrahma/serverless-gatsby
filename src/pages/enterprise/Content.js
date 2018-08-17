import React from 'react'
import { withTheme } from 'styled-components'

import { Box, Container, Flex } from 'serverless-design-system/src'
import Form from './Form';
import Pros from './Pros';

const Content = ({ theme }) => (
  <Container
    pt={[
      theme.navbarHeights.mobile,
      theme.navbarHeights.mobile,
      theme.navbarHeights.desktop,
    ]}
    px={'15px'}
  >
    <Flex.spaceBetween
      flexDirection={['column', 'column', 'row']}
      my={[2, 2, 5, 6]}
    >
      <Box width={[1, 1, 2/5]}>
        <Pros />
      </Box>
      <Box width={[1, 1, 1/2]}>
        <Form />
      </Box>
    </Flex.spaceBetween>
  </Container>
)

export default withTheme(Content);
