import React from 'react'
import styled from 'styled-components'
import { Flex } from 'serverless-design-system/src'
import Logo from './Logo'
import NewsLetterForm from './NewsLetterForm'

const Wrapper = styled(Flex.verticallyCenter)`
  justify-content: space-between;
  transition: padding 0.5s;
`;

export default ({ isNavbarShrinked }) => (
  <Wrapper py={isNavbarShrinked ? 0 : 15}>
    <Logo />
    <NewsLetterForm />
  </Wrapper>
)
