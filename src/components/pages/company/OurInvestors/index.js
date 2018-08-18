import React from 'react'

import { Container, Flex, TextWithIcon, Heading, Image } from 'serverless-design-system/src'

import redRectangleDots from '../../../../assets/images/redRectangleDots.png'
import investorTrinity from '../../../../assets/images/investorTrinity.png'
import investorHeavyBit from '../../../../assets/images/investorHeavyBit.png'

const OurInvestors= () => (
  <Container width={1} mt={8}>
    <Flex flexDirection='column' px={3}>
      <Flex justifyContent='center'>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight='32px'
          iconWidth='50px'
          iconTop='10px'
          iconLeft='-10px'
        >
          <Heading.h1>Our Investors</Heading.h1>
        </TextWithIcon> 
      </Flex>
      <Flex justifyContent='center'>
        <Flex 
          flexDirection={['column', 'row', 'row']}
          flexWrap='wrap'
          justifyContent='center'
          mt={4}
          width={[1, 7/10]}
        >
          <Image src={investorTrinity} alt='trinity' height='63px' m={4} />
          <Image src={investorHeavyBit} alt='heavybit-industries' height='75px' m={4} />
        </Flex>
      </Flex>
    </Flex>
  </Container>
)

export default OurInvestors