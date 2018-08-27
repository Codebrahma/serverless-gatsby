import React from 'react'
import styled from 'styled-components'
import { Container, Column, Flex, Box, P, TextWithIcon, Heading, Image } from 'serverless-design-system/src'

import redRectangleDots from 'src/assets/images/redRectangleDots.png'
import team from 'src/assets/images/team.png'

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

const HowWeOperate = () => (
  <Container>
    <Column>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight="32px"
        iconWidth="52px"
        iconTop="5px"
        iconLeft="-10px"
        backgroundSize="contain"
      >
        <Heading.h1
          fontFamily="SoleilBk"
          lineHeight={0}
          letterSpacing="h2"
          mt={1}
        >
          How We Operate
        </Heading.h1>
      </TextWithIcon>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 0.5]}>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </P>
        </Box>
         <Flex justifyContent='flex-end' width={[1, 1, 0.5]}>
          <Box
            width={[1, 1, 9/10, 9/10, 7/10]}
            boxShadow='2px 2px 8px 0 #eaeaea'
            border='1px solid #eaeaea'
            px={4}
            py={3}
          >
            <Heading.h4 fontSize={3} fontFamily='SoleilBk'>
              Our Benefits
            </Heading.h4>
            <HorizontalLine />
            {benefitList.map((benefit, index) => <P key={index} mt={4} fontFamily='Soleilbk'>{benefit}</P>)}
          </Box>
        </Flex>
      </Flex>
      <Image src={team} width={1} mt={4} />
    </Column>
  </Container>
)

export default HowWeOperate