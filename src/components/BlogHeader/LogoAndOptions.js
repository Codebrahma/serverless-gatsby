import React from 'react'
import styled from 'styled-components'
import { Flex } from 'serverless-design-system/src'

import Logo from './Logo'
import NewsLetterForm from './NewsLetterForm'
import MobileOptions from './MobileOptions'
import BlogNavbarContext from './BlogNavbarContext'

const Wrapper = styled(Flex.verticallyCenter)`
  justify-content: space-between;
  transition: padding 0.5s;
`;

export default () => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Wrapper py={[15, 15, isNavbarShrinked ? 0 : 15]}>
          <Logo />
          <NewsLetterForm />
          <MobileOptions />
        </Wrapper>
      )
    }
  </BlogNavbarContext.Consumer>
)
