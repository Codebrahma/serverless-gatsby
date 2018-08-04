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

const UseCase = () => (
  <Flex flexDirection="column" justifyContent="center">
    <Box>
      <P align="center" fontSize={5} color="black">Serverless Framework Use Cases</P>
      <P align="center">These are the 3 main use cases for the Serverless Framework that you should know about.</P>
    </Box>
    <Flex flexDirection={['column', 'column', 'row']} py={[3, 3, 5]}>
      <Flex width={[1, 1, 0.5]} mb={2} pr={110} order={[2, 2, 1]} flexDirection="column">
        <Heading.h3>Simple, scaleable APIs</Heading.h3>
        <P>
          The Serverless Framework provides a simple way to develop infinitely scaleable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live. With native support for AWS API Gatewway, Event Gateway, and more you can utilize the tools you know and trust with a single experience.
        </P>
      </Flex>
      <Flex width={[1, 1, 0.5]} mb={2} justifyContent="center" order={[1, 1, 2]}>
        <Image
          src={scaleableAPI}
          maxWidth={1}
          width={0.6}
          maxHeight={240}
          my="auto"
        />
      </Flex>
    </Flex>
    <Flex flexDirection={['column', 'column', 'row']} py={[3, 3, 5]}>
      <Flex width={[1, 1, 0.5]} mb={2} pl={[0, 0, 110]} order={[2, 2, 2]} flexDirection="column">
        <Heading.h3>Easy Automation</Heading.h3>
        <P>
          The Serverless Framework makes automating anything quick and easy. Simply subscribe a function to the event and let the framework take care of the rest.
        </P>
      </Flex>
      <Flex width={[1, 1, 0.5]} mb={2} justifyContent="center" order={[1, 1, 1]}>
        <Image
          src={easyAutomation}
          maxWidth={1}
          width={0.6}
          maxHeight={240}
          my="auto"
        />
      </Flex>
    </Flex>
    <Flex flexDirection={['column', 'column', 'row']} py={[3, 3, 5]}>
      <Flex width={[1, 1, 0.5]} mb={2} pr={110} order={[2, 2, 1]} flexDirection="column">
        <Heading.h3>Data Processing</Heading.h3>
        <P>
          Transforming data and building data pipelines and has never been easier.
        </P>
      </Flex>
      <Flex width={[1, 1, 0.5]} mb={2} justifyContent="center" order={[1, 1, 2]}>
        <Image
          src={dataProcessing}
          maxWidth={1}
          width={0.6}
          maxHeight={240}
          my="auto"
        />
      </Flex>
    </Flex>
  </Flex>
);

export default UseCase;