import React from 'react';

import {
  Flex,
  Box,
  Heading,
  Image,
  P,
} from 'serverless-design-system/src';

import scaleableAPI from '../../../assets/images/scalableAPI.png';
import dataProcessing from '../../../assets/images/dataProcessing.png';
import easyAutomation from '../../../assets/images/easyAutomation.png';

const UseCase = ({ title, description, imgSrc, reverse }) => (
  <Flex flexDirection={['column', 'column', 'row']} py={[3, 3, 5]}>
    <Flex
      width={[1, 1, 0.5]}
      mb={2}
      pr={[0, 0, 55, 110]}
      order={reverse ? [1, 1, 2] : [2, 2, 1]}
      flexDirection="column"
    >
      <Heading.h3 fontFamily="SoleilBk">{title}</Heading.h3>
      <P>{ description }</P>
    </Flex>
    <Flex
      width={[1, 1, 0.5]}
      mb={2}
      justifyContent="center"
      order={reverse ? [2, 2, 1] : [1, 1, 2]}
    >
      <Image
        src={imgSrc}
        alt={title}
        maxWidth={1}
        width={0.6}
        maxHeight={240}
        my="auto"
      />
    </Flex>
  </Flex>
);

const UseCases = () => (
  <Flex flexDirection="column" justifyContent="center">
    <Box>
      <P align="center" fontSize={5} color="black">Serverless Framework Use Cases</P>
      <P align="center">These are the 3 main use cases for the Serverless Framework that you should know about.</P>
    </Box>
    <UseCase
      title='Simple, scaleable APIs'
      description='The Serverless Framework provides a simple way to develop infinitely scaleable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live. With native support for AWS API Gatewway, Event Gateway, and more you can utilize the tools you know and trust with a single experience.'
      imgSrc={scaleableAPI}
    />
    <UseCase
      title='Easy Automation'
      description='The Serverless Framework makes automating anything quick and easy. Simply subscribe a function to the event and let the framework take care of the rest.'
      imgSrc={easyAutomation}
      reverse
    />
    <UseCase
      title='Data Processing'
      description='Transforming data and building data pipelines and has never been easier.'
      imgSrc={dataProcessing}
    />
  </Flex>
);

export default UseCases;