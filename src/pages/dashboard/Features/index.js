import React from 'react'


import {
  Box,
  Container,
  Flex,
  Heading,
  GatsbyImg,
  P
} from 'serverless-design-system/src'

import PickImgFromContext from '../../../components/HOC/ImageContext'

// This is replaced by local Features component since this breaks in netlify
// import { Features } from 'src/fragments'

/* Local Temporary Feature component without Counter logic */
const FeatureItem = ({ header, img, content, rightAligned }) => (
  <Box.relative
    width={[1, 1, 3/7, 4/10]}
    mr={[0, 0, 2, rightAligned ? '10%' : 0]}
    ml={[0, 0, 2, rightAligned ? 0 : '10%' ]}
    pb={[4, 4, 6]}
    style={{ counterIncrement: 'step-counter' }}
  >
    {
      img && <GatsbyImg resolutions={img.resolutions} mb={25} />
    }
      {header}
    <P>{content}</P>
  </Box.relative>
)

/* Local Temporary Features component */
const Features = ({ features }) => (
  <Container px={2} pb={[300, 300, 10, 10]}>
    <Flex.column px={[0, 0, 2, 5]} mt={5}>
      <Heading.h2 align='center' fontFamily='SoleilSb' my={4}>
        Features
      </Heading.h2>
      <Flex.row flexWrap='wrap' mt={3}>
        {features.map(({ header, img, content }, index) => (
          <FeatureItem
            key={header}
            header={header}
            content={content}
            img={img}
            rightAligned={index % 2 === 0}
          />
        ))}
      </Flex.row>
    </Flex.column>
  </Container>
)

const featureItemsData = (
  dashboardFeature1,
  dashboardFeature2,
  dashboardFeature3,
  dashboardFeature4,
  dashboardFeature5,
  dashboardFeature6
) => [
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

const DashboardFeatures = ({
  dashboardFeature1,
  dashboardFeature2,
  dashboardFeature3,
  dashboardFeature4,
  dashboardFeature5,
  dashboardFeature6,
}) => <Features features={featureItemsData(dashboardFeature1, dashboardFeature2, dashboardFeature3, dashboardFeature4, dashboardFeature5, dashboardFeature6)} />

export default PickImgFromContext(DashboardFeatures, ['dashboardFeature1', 'dashboardFeature2', 'dashboardFeature3', 'dashboardFeature4', 'dashboardFeature5', 'dashboardFeature6'])
