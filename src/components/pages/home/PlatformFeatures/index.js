import React from 'react'
import Link from 'gatsby-link'
import {
  Box,
  Button,
  Flex,
  Heading,
  ImageCard,
  ResponsiveStack,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import frameworkImage from 'src/assets/images/illustration-1.png'
import dashboardImage from 'src/assets/images/illustration-2.png'
import gatewayImage from 'src/assets/images/illustration-3.png'

const LearnMoreButton = ({ to }) => (
  <Flex.horizontallyCenter>
    <Link to={to}>
      <Button width={['280px', '280px', '245px', '280px']}>learn more</Button>
    </Link>
  </Flex.horizontallyCenter>
)

const PlatformFeature = ({ image, title, description, learnMoreLink }) => (
  <Box width={[1, 1, 1 / 3]} my={2}>
    <ImageCard
      img={image}
      imgProps={{ height: ['200px', '200px', '175px', '245px'] }}
      title={title}
      description={description}
    >
      <LearnMoreButton to={learnMoreLink} />
    </ImageCard>
  </Box>
)

const PlatformFeatures = () => (
  <AppContainer>
    <Box mx={2} mt={7}>
      <Heading.h2
        fontFamily='SoleilSb'
        align='center'
        fontSize={[5, 5, 6]}
        lineHeight={[1, 1, 4]}
      >
        Serverless Platform empowers developers to build & deploy serverless
        applications, on any provider.
      </Heading.h2>
    </Box>
    <ResponsiveStack.spaceBetween
      my={[5, 5, 5, 6]}
    >
      <PlatformFeature
        image={frameworkImage}
        title='Serverless Framework'
        description='Build serverless applications quickly on any vendor.'
        learnMoreLink='/framework'
      />
      <PlatformFeature
        image={dashboardImage}
        title='Serverless Dashboard'
        description='Observe and monitor your functions in action.'
        learnMoreLink='/dashboard'
      />
      <PlatformFeature
        image={gatewayImage}
        title='Event Gateway'
        description='Integrate serverless & legacy applications via event-driven extensibility.'
        learnMoreLink='/event-gateway'
      />
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default PlatformFeatures