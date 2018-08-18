import React from 'react'

import { Container, Flex, Box, P, TextWithIcon, Heading } from 'serverless-design-system/src'

import redRectangleDots from '../../../../../assets/images/redRectangleDots.png'

const OurStory = () => (
  <Container width={1} mt={4}>
    <Flex flexDirection={['column', 'column', 'row']} px={3}>
      <Box width={[1, 1, 1/3]}>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight='32px'
          iconWidth='50px'
          iconTop='10px'
          iconLeft='-10px'
        >
          <Heading.h1>Our Story</Heading.h1>
        </TextWithIcon>
      </Box>
      <Box width={[1, 1, 2/3]}>
        <P>In 2015 when we released the Serverless Framework open source project, we had no idea what the serverless movement would become, or how fast it would grow.</P>
        <P>Today, at over 25,000 GitHub stars, the Serverless Framework is the main way developers deploy serverless applications on any FaaS provider. We have an entire ecosystem of tooling that organizations can use to build, operate and integrate their serverless applications at scale. We call it the Serverless Platform.</P>
        <P>At Serverless, Inc., we believe many things. We believe that a future with serverless technologies at its center is inevitable. That serverless will let developers focus less on administration, and more on driving business value to end users. That serverless will allow organizations to innovate and get to market more quickly.</P>
        <P>Most importantly, we believe that these are great things. Our mission is to empower every developer to go serverless.</P>
      </Box>
    </Flex>
  </Container>
)

export default OurStory 