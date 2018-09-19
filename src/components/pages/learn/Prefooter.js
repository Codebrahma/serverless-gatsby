import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {
  Background,
  Box,
  Column,
  Flex,
  Heading,
  Overflow,
  TextWithIcon,
  Relative,
  ResponsiveStack,
  P,
} from 'serverless-design-system/src'

import { NavLink, WhiteButton } from 'src/components'
import RightBoxBg from 'src/assets/images/footerRightBoxBg.png'
import greyDotsSquare from 'src/assets/images/dot-grid-grey-square.png'

const actions = [
  {
    name: 'use cases',
    navProps: {
      to: '/learn/use-cases',
      completed: false,
    },
  },
  {
    name: 'comparisons',
    navProps: {
      to: '/learn/comparisons',
      completed: false,
    },
  },
  {
    name: 'case studies',
    navProps: {
      to: '/learn/case-study',
      completed: false,
    },
  },
]

const DecoratedLink = styled(Link)`
  color: white;
  border-bottom: 1px solid white;
`

const LeftColumn = () => (
  <Flex.horizontallyCenter
    width={[1, 1, 1 / 2]}
    boxSizing='border-box'
    flexDirection='column'
  >
    <Overflow
      o="hidden"
      width={1}
      py={[3, 5, 8]}
      px={[2, 4, 6]}
    >
      <TextWithIcon
        iconSrc={greyDotsSquare}
        iconHeight='100px'
        iconWidth='118px'
        iconTop='-40px'
        iconLeft='-80px'
        backgroundSize={[0, 0, 'contain']}
      >
        <Heading.h2
          color='white'
          fontFamily={'SoleilBk'}
          fontSize={7}
          letterSpacing={0}
        >
          Next Steps
        </Heading.h2>
      </TextWithIcon>
      <P color='white' mt={0}>
        Check out all the different <DecoratedLink to='/learn/use-cases'>use cases</DecoratedLink> for serverless applications. Take a peek at how the Serverless Framework <DecoratedLink to='/learn/comparisons'>compares to other software</DecoratedLink>. Talk to us directly on <DecoratedLink to='/enterprise/'>the enterprise contact form</DecoratedLink>
        <br />
        <br />
        Or if you’re ready, follow our <DecoratedLink to='/learn/use-cases/'>step-by-step guide</DecoratedLink> to start building a Serverless Application with your favorite language.
      </P>
    </Overflow>
  </Flex.horizontallyCenter>
)

const RightColumn = ({ actions }) => (
  <Column>
    {actions.map(({ name, navProps }, index) => (
      <Box m={1} key={index}>
        <NavLink {...navProps}>
          <WhiteButton>{name}</WhiteButton>
        </NavLink>
      </Box>
    ))}
  </Column>
)

const Prefooter = () => (
  <Relative
    top='-320px'
    mb='-290px'
  >
    <ResponsiveStack
      bg='serverlessRed'
      o='hidden'
    >
      <LeftColumn />
      <Box width={[1, 1, 1 / 2]}>
        <Background
          width={1}
          height="fullHeight"
          background={`#fd5750 url(${RightBoxBg}) no-repeat`}
          backgroundSize='cover'
        >
          <Flex.center
            flexDirection="column"
            height="fullHeight"
            py={[5, 5, 8]}
            px={[3, 3, 7]}
          >
            <RightColumn actions={actions} />
          </Flex.center>
        </Background>
      </Box>
    </ResponsiveStack>
  </Relative>
)

export default Prefooter
