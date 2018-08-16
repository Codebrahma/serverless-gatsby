import React from 'react'

import { Flex, Box, P, Image, TextWithIcon, Heading } from 'serverless-design-system/src'

import JamesHall from '../../../../../assets/images/JamesHall.png'
import RedRectangleDots from '../../../../../assets/images/redRectangleDots.png'

const WhyServerless = () => (
  <Flex flexDirection={['column', 'column', 'row']} mt={8} px={3}>
    <Box width={[1, 1, 5/10]} pr={7}>
      <TextWithIcon
        iconSrc={RedRectangleDots}
        iconHeight='32px'
        iconWidth='50px'
        iconTop='10px'
        iconLeft='-10px'
      >
        <Heading.h1>Why Serverless</Heading.h1>
      </TextWithIcon>
      <P>Parallax’s regular stack is LAMP, built on top of CloudFront, Elastic Load Balancers and EC2 nodes. In order to accomplish their goal with this stack they would have to build a queueing system for the image generation, then spin up EC2 nodes dedicated to generating those images based on the throughput.</P>  
      <P>After thinking it through, the team decided that they could accomplish the same goal much more simply using a serverless architecture on AWS Lambda. This would allow them to focus on writing the business logic in a simple Lambda function and letting Amazon do all the hard work of scaling to meet demand.</P>
      <P>They settled on using the Serverless Framework and CloudFormation to orchestrate the entire platform in code, building a completely scaleable architecture. Development took around six or seven weeks in total, though there was plenty of research and prototyping done beforehand to determine the correct architecture design.</P>
      <P>Thanks to Node.js they were able to reuse the validation code across the frontend and backend. They could also check the proof-of-concept,and do some load testing, for free as part of the the Amazon Web Services 1 million request/month free usage tier. This meant they could play around until everything was exactly how they needed it to be.</P>
    </Box>
    <Flex.column
      alignItems={['center', 'center', 'flex-end', 'flex-end', 'flex-end']}
      pt={3}
      width={[5/10, 5/10, 7/10, 5/10, 5/10]}
    >
      <Flex
        background={`url(${JamesHall})}`}
        backgroundStyle='contain'
        px={3}
        height='581px'
        alignItems='flex-end'
        width={[1, 1, 6/10, 6/10, 6/10]}
      >
        <P fontSize={[4, 4, 3, 3, 4]} color='white'>
          Going serverless allowed us to concentrate on writing the features without worrying about how to scale it. The Serverless Framework allowed us to stop worrying about the underlying architecture, but was flexible enough to dip into if needed.
        </P>
      </Flex>
    </Flex.column>
  </Flex>
)

export default WhyServerless