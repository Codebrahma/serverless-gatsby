import React from 'react'

import {
  Column,
  Flex,
  TextWithIcon,
  Heading,
  Image,
  ResponsiveStack
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'
import investorTrinity from 'src/assets/images/trinity.png'
import investorHeavyBit from 'src/assets/images/heavybit.png'

const OurInvestors= () => (
  <AppContainer>
    <Column px={3}>
      <Flex.center>
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
            Our Investors
          </Heading.h1>
        </TextWithIcon>
      </Flex.center>

      <Flex.center>
        <ResponsiveStack
          flexWrap='wrap'
          width={[1, 1, 2/3, 2/3, 1/2]}
          justifyContent="space-between"
          my={5}
        >
          <Column m={[2, 2, 0]} alignItems="center">
            <Image src={investorTrinity} alt='trinity' height='63px' />
          </Column>
          <Column m={[2, 2, 0]} alignItems="center">
            <Image src={investorHeavyBit} alt='heavybit-industries' height='75px' />
          </Column>
        </ResponsiveStack>
      </Flex.center>
    </Column>
  </AppContainer>
)

export default OurInvestors