import React from 'react';

import {
  Flex,
  Box,
  Heading,
  P
} from 'serverless-design-system/src';

import minimumConfiguration from '../../../assets/images/minimumConfiguration.png';
import robustEcosystem from '../../../assets/images/robustEcosystem.png';
import multiLingual from '../../../assets/images/multiLingual.png';
import cloudAgnostic from '../../../assets/images/cloudAgnostic.png';
import appLifecycleManagement from '../../../assets/images/appLifecycleManagement.png';
import streamingLogs from '../../../assets/images/streamingLogs.png';

// TODO: Add counter based number for each image
const FeatureItem = ({ header, img, content }) => (
  <Box width={[1, 1, 1/2]} pr="100px" pb="70px">
    <img src={img} mb={2}/>
    <Heading.h3 fontFamily="SoleilBk">{header}</Heading.h3>
    <P>{content}</P>
  </Box>
);

const featureItemsData = [
  {
    header: 'Minimum Configuration',
    img: minimumConfiguration,
    content: 'Define your entire Serverless application with a single yaml configuration file.',
  },
  {
    header: 'Robust Ecosystem',
    img: robustEcosystem,
    content: 'The Serverless Framework community has built and published hudreds of plugins to extend the framework’s functionality and example projects to get you started quickly.',
  },
  {
    header: 'Multi Lingual',
    img: multiLingual,
    content: 'Don’t be hamstrung by just one language: write functions in python, node.js, java, Go, scala, C# and more.',
  },
  {
    header: 'Cloud Agnostic',
    img: cloudAgnostic,
    content: 'All your cloud services are now compatible with one another: share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
  },
  {
    header: 'Application Lifecycle Management',
    img: appLifecycleManagement,
    content: 'With built in support for local development, stages, rollback and more, the framework is loaded with the functionality you need to manage the lifecycle of your application.',
  },
  {
    header: 'Streaming Logs',
    img: appLifecycleManagement,
    content: 'Streaming logs from your functions directly in to your CLI, making it easy to rapidly redug and troubleshoot.',
  },
];

const Features = () => (
  <Flex flexDirection="column" px="50px" mt={6}>
    <Heading.h2 align="center" fontFamily="SoleilSb" my={4}>Features</Heading.h2>
    <Flex flexDirection="row" flexWrap="wrap" mt={3}>
      {
        featureItemsData.map(({ header, img, content }) => (
          <FeatureItem
            header={header}
            content={content}
            img={img}
          />
        ))
      }
    </Flex>
  </Flex>
);

export default Features;