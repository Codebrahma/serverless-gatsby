import React from 'react';

import { Features } from 'src/fragments';
import ImageContextHOC from '../../../components/ImageContextHOC';

const featureItemsData = (
  dashboardFeature1,
  dashboardFeature2,
  dashboardFeature3,
  dashboardFeature4,
  dashboardFeature5,
  dashboardFeature6,
) => [
  {
    header: 'Architecture Visualization',
    img: dashboardFeature1,
    content: 'Let your team share the functions, events, and subscriptions that make up your serverless application.',
  },
  {
    header: 'Easy Logs',
    img: dashboardFeature2,
    content: 'Access logs from within the dashboard, making it easier to debug and deploy your serverless applications.',
  },
  {
    header: 'User Access Control',
    img: dashboardFeature3,
    content: 'Manage which team members have access to which cloud resources, making security and compliance for serverless seamless.',
  },
  {
    header: 'Application Metrics',
    img: dashboardFeature4,
    content: 'View all vital serverless application metrics in one place, making serverless operations simple and intuitive.',
  },
  {
    header: 'Streaming Events',
    img: dashboardFeature5,
    content: 'Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.',
  },
  {
    header: 'Audit Logs',
    img: dashboardFeature6,
    content: 'View and manage key operations events, such as deployments, in one single place for all your serverless applications.',
  },
];

const FeatureList = ({
  dashboardFeature1,
  dashboardFeature2,
  dashboardFeature3,
  dashboardFeature4,
  dashboardFeature5,
  dashboardFeature6,
}) => (
  <Features 
    features={featureItemsData(dashboardFeature1, dashboardFeature2, dashboardFeature3, dashboardFeature4, dashboardFeature5, dashboardFeature6)} 
  />
);

export default ImageContextHOC(FeatureList, ['dashboardFeature1', 'dashboardFeature2', 'dashboardFeature3', 'dashboardFeature4', 'dashboardFeature5', 'dashboardFeature6']);