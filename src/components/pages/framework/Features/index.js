import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Features } from 'src/fragments'
import minimumConfiguration from 'src/assets/images/icon-logs.svg'
import robustEcosystem from 'src/assets/images/icon-ecosystem.svg'
import multiLingual from 'src/assets/images/icon-visualize.svg'
import cloudAgnostic from 'src/assets/images/icon-cloud.svg'
import appLifecycleManagement from 'src/assets/images/icon-events.svg'
import streamingLogs from 'src/assets/images/icon-streaming.svg'

const featureItemsData = [
  {
    header: 'Minimum Configuration',
    img: minimumConfiguration,
    content:
      'Define your entire Serverless application with a single yaml configuration file.',
  },
  {
    header: 'Robust Ecosystem',
    img: robustEcosystem,
    content:
      'The Serverless Framework community has built and published hudreds of plugins to extend the framework’s functionality and example projects to get you started quickly.',
  },
  {
    header: 'Multi Lingual',
    img: multiLingual,
    content:
      'Don’t be hamstrung by just one language: write functions in python, node.js, java, Go, scala, C# and more.',
  },
  {
    header: 'Cloud Agnostic',
    img: cloudAgnostic,
    content:
      'All your cloud services are now compatible with one another: share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
  },
  {
    header: 'Application Lifecycle Management',
    img: appLifecycleManagement,
    content:
      'With built in support for local development, stages, rollback and more, the framework is loaded with the functionality you need to manage the lifecycle of your application.',
  },
  {
    header: 'Streaming Logs',
    img: streamingLogs,
    content:
      'Streaming logs from your functions directly in to your CLI, making it easy to rapidly redug and troubleshoot.',
  },
]

const FrameworkFeatures = () => (
  <Box
    pb={[12, 12, 10]}
    mb={[4, 4, 0]}
  >
    <Features features={featureItemsData} />
  </Box>
)

export default FrameworkFeatures
