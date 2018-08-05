import React from 'react';

import {
  Flex,
  Box,
  P,
  TextWithIcon,
  Text
} from 'serverless-design-system/src';

import redRectangleDots from '../../../assets/images/redRectangleDots.png';

// TODO: Remove any hardcoded pixels
const Advantage = ({ title, description }) => (
  <Flex
    width={[1, 1, 0.33]}
    px={2}
    mt={2}
    flexDirection="column"
  >
    <Flex justifyContent={['center', 'center', 'left']}>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight="26px"
        iconWidth="45px"
        iconTop="-5px"
        iconLeft='-10px'
        backgroundSize="initial"
      >
        <Text.span
          color="white"
          fontFamily="SoleilBk"
          fontSize="4"
          align="center"
        >
          {title}
        </Text.span>
      </TextWithIcon>
    </Flex>
    <P color="gray.3">
      {description}
    </P>
  </Flex>
);

const Advantages = () => (
  <Flex flexDirection={['column', 'column', 'row']} flexWrap="wrap">
    <Advantage
      title="Infrastructure as Code"
      description="With the Serverless Framework you can define your entire Serverless application,
      utlizing popular Serverless technologies like AWS Lambda, with a simple yaml configuration file."
    />
    <Advantage
      title="Simple Serverless Development"
      description="The Serverless Framework provides a simple, intuitive CLI experience that makes it easy to develop and deploy applications to cloud platforms like AWS, Microsoft Azure, Google Cloud Platform, IBM OpenWhisk, and more."
    />
    <Advantage
      title="Provider Agnostic"
      description="The Serverless Framework is open source and provider agnostic, meaning you only need one tool to tap in to the power of all the cloud providers."
    />
  </Flex>
)

export default Advantages;