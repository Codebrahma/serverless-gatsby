import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Features } from 'src/fragments'
import gatewayFeature1 from 'src/assets/images/icon-dash-light.svg'
import gatewayFeature2 from 'src/assets/images/icon-component.svg'
import gatewayFeature3 from 'src/assets/images/icon-infra.svg'
import gatewayFeature4 from 'src/assets/images/icon-platform-agnostic.svg'
import gatewayFeature5 from 'src/assets/images/icon-events.svg'
import gatewayFeature6 from 'src/assets/images/icon-visualize.svg'

const featureItemsData = [
  {
    header: 'API Gateway',
    img: gatewayFeature1,
    content:
      'Easily subscribe FaaS functions to HTTP endpoints. Setup multiple Serverless services under a single domain, even across AWS accounts.',
  },
  {
    header: 'Pub/Sub',
    img: gatewayFeature2,
    content:
      'Take advantage of pub/sub functionality but utilizing custom events. This allows you to process the same event with multiple systems.',
  },
  {
    header: 'Connector Functions',
    img: gatewayFeature3,
    content:
      'Automatically route events to external systems like Kinesis, Firehose, SQS, etc.',
  },
  {
    header: 'Platform Agnostic',
    img: gatewayFeature4,
    content:
      'All your cloud services are now compatible with one another; share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
  },
  {
    header: 'Streaming Events',
    img: gatewayFeature5,
    content:
      'Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.',
  },
  {
    header: 'Shareable events',
    img: gatewayFeature6,
    content:
      'Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.',
  },
]

const EventGatewayFeatures = () => (
  <Box
    pb={[12, 12, 10]}
    mb={[4, 4, 0]}
  >
    <Features features={featureItemsData} />
  </Box>
)

export default EventGatewayFeatures
