import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'serverless-design-system/src'

import { NewsLetterForm } from 'src/components'
import Logo from './Logo'
import MobileOptions from './MobileOptions'
import BlogNavbarContext from './BlogNavbarContext'

const Wrapper = styled(Flex.verticallyCenter)`
  justify-content: space-between;
  transition: padding 0.5s;
`;

const NewsLetter = () => (
  <Box
    width={[1, 1, 0.5, 0.35]}
    display={['none', 'none', 'block']}
  >
    <NewsLetterForm
      emailFieldProps={{ p: 15, placeholder: 'enter email for updates' }}
      submitBtnProps={{ p: 15 }}
    />
  </Box>
)

export default () => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Wrapper py={[15, 15, isNavbarShrinked ? 0 : 15]}>
          <Logo />
          <NewsLetter />
          <MobileOptions />
        </Wrapper>
      )
    }
  </BlogNavbarContext.Consumer>
)
