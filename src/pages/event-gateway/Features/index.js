import React from 'react';

import { Features } from 'src/fragments';

import ImageContextHOC from '../../../components/ImageContextHOC';

const featureItemsData = (
  gatewayFeature1,
  gatewayFeature2,
  gatewayFeature3,
  gatewayFeature4,
  gatewayFeature5,
  gatewayFeature6,
) => [
  {
    header: 'API Gateway',
    img: gatewayFeature1,
    content: 'Easily subscribe FaaS functions to HTTP endpoints. Setup multiple Serverless services under a single domain, even across AWS accounts.',
  },
  {
    header: 'Pub/Sub',
    img: gatewayFeature2,
    content: 'Take advantage of pub/sun functionality but utilizing custom events. This allows you to process the same event with multiple systems.',
  },
  {
    header: 'Connector Functions',
    img: gatewayFeature3,
    content: 'Automatically route events to external systems like Kinesis, Firehose, SQS, etc.',
  },
  {
    header: 'Platform Agnostic',
    img: gatewayFeature4,
    content: 'All your cloud services are now compatible with one another; share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
  },
  {
    header: 'Streaming Events',
    img: gatewayFeature5,
    content: 'Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.',
  },
  {
    header: 'Shareable events',
    img: gatewayFeature6,
    content: 'Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.',
  },
];

const gatewayFeatures = ({
  gatewayFeature1,
  gatewayFeature2,
  gatewayFeature3,
  gatewayFeature4,
  gatewayFeature5,
  gatewayFeature6,
}) => (
  <Features
    features={featureItemsData(gatewayFeature1, gatewayFeature2, gatewayFeature3, gatewayFeature4, gatewayFeature5, gatewayFeature6)}
  />
);


export default ImageContextHOC(gatewayFeatures, [
  'gatewayFeature1', 
  'gatewayFeature2', 
  'gatewayFeature3',
  'gatewayFeature4', 
  'gatewayFeature5', 
  'gatewayFeature6',
]);