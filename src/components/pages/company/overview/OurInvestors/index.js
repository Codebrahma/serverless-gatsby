import React from 'react'
import {
  Column,
  Flex,
  Image,
  ResponsiveStack
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'
import investorTrinity from 'src/assets/images/trinity.png'
import investorHeavyBit from 'src/assets/images/heavybit.png'

const OurInvestors= () => (
  <AppContainer>
    <Column px={3} pt={[6, 6, 4, 2]}>
      <Flex.center>
        <TitleWithIcon>
          Our Investors
        </TitleWithIcon>
      </Flex.center>

      <Flex.center>
        <ResponsiveStack
          flexWrap='wrap'
          width={[1, 1, 2/3, 2/3, 1/2]}
          justifyContent="space-between"
          my={[1, 1, 2, 4, 5]}
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