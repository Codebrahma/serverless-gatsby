import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Features } from 'src/fragments'
import dashboardFeature1 from 'src/assets/images/icon-visualize.svg'
import dashboardFeature2 from 'src/assets/images/icon-logs.svg'
import dashboardFeature3 from 'src/assets/images/icon-access-control.svg'
import dashboardFeature4 from 'src/assets/images/icon-graph-light.svg'
import dashboardFeature5 from 'src/assets/images/icon-events.svg'
import dashboardFeature6 from 'src/assets/images/icon-audit.svg'

const featureItemsData = [
  {
    header: 'Architecture Visualization',
    img: dashboardFeature1,
    content:
      'Let your team share the functions, events, and subscriptions that make up your serverless application.',
  },
  {
    header: 'Easy Logs',
    img: dashboardFeature2,
    content:
      'Access logs from within the dashboard, making it easier to debug and deploy your serverless applications.',
  },
  {
    header: 'User Access Control',
    img: dashboardFeature3,
    content:
      'Manage which team members have access to which cloud resources, making security and compliance for serverless seamless.',
  },
  {
    header: 'Application Metrics',
    img: dashboardFeature4,
    content:
      'View all vital serverless application metrics in one place, making serverless operations simple and intuitive.',
  },
  {
    header: 'Streaming Events',
    img: dashboardFeature5,
    content:
      'Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.',
  },
  {
    header: 'Audit Logs',
    img: dashboardFeature6,
    content:
      'View and manage key operations events, such as deployments, in one single place for all your serverless applications.',
  },
]

const DashboardFeatures = () => (
  <Box
    pb={[12, 12, 10]}
    mb={[4, 4, 0]}
  >
    <Features features={featureItemsData} />
  </Box>
)

export default DashboardFeatures
