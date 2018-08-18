import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box, P, TextWithIcon, Heading, Image } from 'serverless-design-system/src'

import redRectangleDots from '../../../../assets/images/redRectangleDots.png'
import team from '../../../../assets/images/team.png'

const benefitList = [
  'Quality healthcare, dental, and vision plans',
  '401(k) Retirement savings account',
  'Unlimited paid time off policy',
  'SF commuter program',
  'Team Retreats',
]

// TODO: Refactor change this to 
const HorizontalLine = styled.hr`
  border: 1px solid #dfe5e6
`

// TODO: Add the non importable image in front of each benefit
const HowWeOperate = () => (
  <Container width={1} mt={6} px={3} mb='400px'>
    <Flex.column>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight='32px'
        iconWidth='50px'
        iconTop='10px'
        iconLeft='-10px'
      >
        <Heading.h1>How We Operate</Heading.h1>
      </TextWithIcon>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 0.5]}>
          <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
          <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
        </Box>
         <Flex justifyContent='flex-end' width={[1, 1, 0.5]}>
          <Box width={[1, 1, 9/10, 9/10, 7/10]} boxShadow='2px 2px 8px 0 #eaeaea' px={4} py={3}>
            <Heading.h4 fontSize={3} fontFamily='SoleilBk'>Our Benefits</Heading.h4>
            <HorizontalLine />
            {benefitList.map((benefit, index) => <P key={index} mt={4} fontFamily='Soleilbk'>{benefit}</P>)}
          </Box>
        </Flex>
      </Flex>
      <Image src={team} width={1} mt={4} />
    </Flex.column>
  </Container>
)

export default HowWeOperate 