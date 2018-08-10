import React from 'react';
import Link from 'gatsby-link';

import {
  Box,
  Button,
  Container,
  Flex,
  GatsbyImgCard,
  Heading,
  ImageCard,
  ResponsiveStack
} from 'serverless-design-system/src';

import ImageContextHOC from '../../../components/ImageContextHOC';

const LearnMoreButton = ({ to }) => (
  <Flex.horizontallyCenter>
    <Link to={to}>
      <Button width={[ '280px', '280px', '245px', '280px' ]}>
        learn more
      </Button>
    </Link>
  </Flex.horizontallyCenter>
)

const PlatformFeature = ({ image, title, description, learnMoreLink }) => (
  <Box
    width={[1, 1, 1/3]}
    my={2}
  >
    <GatsbyImgCard
      img={image}
      title={title}
      alt={title}
      description={description}
    >
      <LearnMoreButton to={learnMoreLink} />
    </GatsbyImgCard>
  </Box>
);

const PlatformFeatures = ({ 
  featureFrameworkImage, 
  featureDashboardImage, 
  featureGatewayImage 
}) => (
  <Container mt={7}>
    <Box mx={2}>
      <Heading.h2
        fontFamily='SoleilSb'
        align='center'
        fontSize={[ 5, 5, 6 ]}
        lineHeight={[ 1, 1, 4 ]}
      >
        Serverless Platform empowers developers to build & deploy serverless applications, on any provider.
      </Heading.h2>
    </Box>
    <ResponsiveStack.spaceBetween my={6}>
      <PlatformFeature
        image={featureFrameworkImage}
        title='Serverless Framework'
        description='Build serverless applications quickly on any vendor.'
        learnMoreLink='/framework'
      />
      <PlatformFeature
        image={featureDashboardImage}
        title='Serverless Dashboard'
        description='Observe and monitor your functions in action.'
        learnMoreLink='/dashboard'
      />
      <PlatformFeature
        image={featureGatewayImage}
        title='Event Gateway'
        description='Integrate serverless & legacy applications via event-driven extensibility.'
        learnMoreLink='/event-gateway'
      />
    </ResponsiveStack.spaceBetween>
  </Container>
);

export default ImageContextHOC(PlatformFeatures, ['featureFrameworkImage', 'featureDashboardImage', 'featureGatewayImage']);