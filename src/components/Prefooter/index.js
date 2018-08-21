import React from 'react'

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

import NavLink from '../NavLink'
import WhiteButton from '../WhiteButton'
import RightBoxBg from 'src/assets/images/footerRightBoxBg.png'
import whiteRectangleDots from 'src/assets/images/whiteRectangleDots.png'

const LeftColumn = ({ heading, sentences }) => (
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
        iconSrc={whiteRectangleDots}
        iconHeight='100px'
        iconWidth='150px'
        iconTop='-20px'
        iconLeft='-100px'
        backgroundSize={[0, 0, 'initial']}
      >
        <Heading.h2
          color='white'
          fontFamily={'SoleilBk'}
          fontSize={7}
          letterSpacing={0}
        >
          {heading}
        </Heading.h2>
      </TextWithIcon>
      {sentences.map((sentence, index) => (
        <P color='white' mt={0} key={index}>
          {sentence}
        </P>
      ))}
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

const Prefooter = ({ heading, sentences, actions }) => (
  <Relative
    top='-320px'
    mb='-290px'
  >
    <ResponsiveStack
      bg='serverlessRed'
      o='hidden'
    >
      <LeftColumn heading={heading} sentences={sentences} />
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