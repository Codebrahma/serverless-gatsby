import React from 'react'
import {
  Absolute,
  Background,
  Column,
  Flex,
  Box,
  P,
  Text,
  Heading,
  Relative,
  ResponsiveStack,
} from 'serverless-design-system/src'
import { TitleWithIcon } from 'src/fragments'
import JamesHall from 'src/assets/images/JamesHall.png'
import dotGridVertical from 'src/assets/images/dot-grid-vertical.png'

const WhyServerless = () => (
  <ResponsiveStack mt={[5, 5, 8]}>
    <Box width={[1, 1, 5/10]}>
      <TitleWithIcon>Why Serverless</TitleWithIcon>
      <Box pt={[0, 0, 2]} />
      <P>
        Parallax’s regular stack is LAMP, built on top of CloudFront, Elastic Load Balancers and EC2 nodes. In order to accomplish their goal with this stack they would have to build a queueing system for the image generation, then spin up EC2 nodes dedicated to generating those images based on the throughput.
      </P>
      <P>
        After thinking it through, the team decided that they could accomplish the same goal much more simply using a serverless architecture on AWS Lambda. This would allow them to focus on writing the business logic in a simple Lambda function and letting Amazon do all the hard work of scaling to meet demand.
      </P>
      <P>
        They settled on using the Serverless Framework and CloudFormation to orchestrate the entire platform in code, building a completely scaleable architecture. Development took around six or seven weeks in total, though there was plenty of research and prototyping done beforehand to determine the correct architecture design.
      </P>
      <P>
        Thanks to Node.js they were able to reuse the validation code across the frontend and backend. They could also check the proof-of-concept,and do some load testing, for free as part of the the Amazon Web Services 1 million request/month free usage tier. This meant they could play around until everything was exactly how they needed it to be.
      </P>
    </Box>
    <Column
      alignItems={['center', 'center', 'flex-end']}
      pt={3}
      width={[1, 1, 5/10]}
    >
      <Background
        height={[ "50%", "50%", "50%", "70%", "90%" ]}
        width={[1, 1, 8/10, 8/10, 6/10]}
        background={`url(${JamesHall})}`}
        backgroundSize="cover"
        backgroundPosition="center"
        minHeight="350px"
      >
        <Relative>
          <Flex
            p={3}
            height="fullHeight"
            alignItems='flex-end'
          >
            <Text.p
              fontFamily="SoleilLt"
              fontSize={[4, 4, 3, 3, 4]}
              lineHeight={3}
              color='white'
            >
              Going serverless allowed us to concentrate on writing the features without worrying about how to scale it. The Serverless Framework allowed us to stop worrying about the underlying architecture, but was flexible enough to dip into if needed.
            </Text.p>
          </Flex>
          <Absolute
            left="10%"
            bottom={["-115px", "-115px", "-225px", "-325px", "-150px"]}
          >
            <Background
              background={`url(${dotGridVertical})`}
              backgroundSize="contain"
              height="152px"
              width="80px"
            >
            </Background>
          </Absolute>
        </Relative>
      </Background>
      <Column
        pl={['50%', '50%', '60%', '30%']}
        py={[2, 2, 2, 4]}
        width={[1, 1, 1, 0.6]}
        alignItems="flex-start"
      >
        <Heading.h5
          align="right"
          fontFamily="SoleilBk"
          fontSize={4}
          lineHeight={3}
        >
          James Hall
        </Heading.h5>
        <Text.span
          align="right"
          fontFamily="SoleilBk"
          fontSize={2}
          lineHeight={3}
          color="gray.3"
        >
          Director at Parallax
        </Text.span>
      </Column>
    </Column>
  </ResponsiveStack>
)

export default WhyServerless