import React from 'react';

import {
  Flex,
  Box,
  Heading,
  Image,
  P,
} from 'serverless-design-system/src';

import gatewayIllustration1 from '../../../assets/images/gateway-illustration1.png';
import gatewayIllustration2 from '../../../assets/images/gateway-illustration2.png';
import gatewayIllustration3 from '../../../assets/images/gateway-illustration3.png';

const UseCase = ({ title, description, imgSrc, reverse }) => (
  <Flex flexDirection={['column', 'column', 'row']} py={[3, 3, 5]}>
    <Flex
      width={[1, 1, 5/10]}
      mb={2}
      pr={[0, 0, '55px', '110px']}
      order={reverse ? [1, 1, 2] : [2, 2, 1]}
      flexDirection="column"
    >
      <Heading.h3 fontFamily="SoleilBk">{title}</Heading.h3>
      <P>{ description }</P>
    </Flex>
    <Flex
      width={[1, 1, 5/10]}
      mb={2}
      justifyContent="center"
      order={reverse ? [2, 2, 1] : [1, 1, 2]}
    >
      <Image
        src={imgSrc}
        alt={title}
        maxWidth={1}
        width={0.6}
        maxHeight="240px"
        my="auto"
      />
    </Flex>
  </Flex>
);

const UseCases = () => (
  <Flex flexDirection="column" justifyContent="center">
    <Box mt={[5, 5, 8]}>
      <P align="center" fontSize={6} color="black" m={1}>Event Gateway Use Cases</P>
      <P align="center" fontSize={0}>
        These are the 3 main use cases for the Event Gateway that you should know about.
      </P>
    </Box>
    <UseCase
      title='Simple, serverless APIs'
      description='Use the Event Gateway alongside with Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.'
      imgSrc={gatewayIllustration1}
    />
    <UseCase
      title='Subscribe functions to webhooks'
      description='The Event Gateway makes it dead simple to wire functions to any customer event, including webhooks'
      imgSrc={gatewayIllustration2}
      reverse
    />
    <UseCase
      title='Multi-provider service'
      description='The Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.'
      imgSrc={gatewayIllustration3}
    />
  </Flex>
);

export default UseCases;