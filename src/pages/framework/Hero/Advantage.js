import React from 'react';

import {
  Flex,
  Box,
  Image,
  P,
  TextWithIcon,
  Text
} from 'serverless-design-system/src';

import redRectangleDots from '../../../assets/images/redRectangleDots.png';

const Advantage = () => (
  <Flex flexDirection={['column', 'column', 'row']} flexWrap="wrap">
    <Box width={[1, 1, 0.33]} px={4} mt={2}>
      <Flex justifyContent={['center', 'center', 'left']}>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight="26px"
          iconWidth="45px"
          iconTop="-10px"
          iconLeft='-20px'
          backgroundSize="initial"
        >
          <Text.span color="white" fontSize="4" align="center">Infrastructure as Code</Text.span>
        </TextWithIcon>
      </Flex>
      <P color="gray.3">
        With the Serverless Framework you can define your entire Serverless application, 
        utlizing popular Serverless technologies like AWS Lambda, with a simple yaml configuration file.
      </P>
    </Box>
    <Box width={[1, 1, 0.33]} px={4} mt={2}>
      <Flex justifyContent={['center', 'center', 'left']}>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight="26px"
          iconWidth="45px"
          iconTop="-10px"
          iconLeft='-20px'
          backgroundSize="initial"
        >
          <Text.span color="white" fontSize="4">Simple Serverless Development</Text.span>
        </TextWithIcon>
      </Flex>
      <P color="gray.3">
        The Serverless Framework provides a simple, intuitive CLI experience that makes it easy to develop and deploy applications to cloud platforms like AWS, Microsoft Azure, Google Cloud Platform, IBM OpenWhisk, and more.
      </P>
    </Box>
    <Box width={[1, 1, 0.33]} px={4} mt={2}>
      <Flex justifyContent={['center', 'center', 'left']}>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight="26px"
          iconWidth="45px"
          iconTop="-10px"
          iconLeft='-20px'
          backgroundSize="initial"
        >
          <Text.span color="white" fontSize="4">Provider Agnostic</Text.span>
        </TextWithIcon>
      </Flex>
      <P color="gray.3">
        The Serverless Framework is open source and provider agnostic, meaning you only need one tool to tap in to the power of all the cloud providers.
      </P>
    </Box>
  </Flex>
)

export default Advantage;