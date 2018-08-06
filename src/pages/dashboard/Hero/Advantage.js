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
    width={[1, 1, 1/3]}
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
      title="Visualize Your Applications"
      description="The Serverless Dashboard gives your team a shared overview of the functions, events, and subscriptions that make up your serverless application."
    />
    <Advantage
      title="Streamline Development"
      description="View your application logs and metrics from within the UI to ease debugging and increase velocity."
    />
    <Advantage
      title="Collaborate & Manage Access"
      description="Control your security and compliance needs by managing which team members have access to which cloud resources."
    />
  </Flex>
)

export default Advantages;