import React from 'react';

import Features from 'src/fragments/Features';
import dashboardFeature1 from 'src/assets/images/dashboard-feature-1.png';
import dashboardFeature2 from 'src/assets/images/dashboard-feature-2.png';
import dashboardFeature3 from 'src/assets/images/dashboard-feature-3.png';
import dashboardFeature4 from 'src/assets/images/dashboard-feature-4.png';
import dashboardFeature5 from 'src/assets/images/dashboard-feature-5.png';
import dashboardFeature6 from 'src/assets/images/dashboard-feature-6.png';

const featureItemsData = [
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

export default () => (
  <Features features={featureItemsData} />
);
