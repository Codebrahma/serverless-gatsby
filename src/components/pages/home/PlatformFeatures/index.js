import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {
  Box,
  Button,Column,
  Flex,
  ImageCard,
  ResponsiveStack,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { HeadingWithMaxWidth } from 'src/fragments'
import frameworkImage from 'src/assets/images/illustration-1.svg'
import dashboardImage from 'src/assets/images/illustration-2.svg'
import gatewayImage from 'src/assets/images/illustration-3.svg'

const ButtonWrapper = styled(Flex.horizontallyCenter)`
  overflow-x: hidden;
`

const LearnMoreButton = ({ to }) => (
  <ButtonWrapper>
    <Link to={to}>
      <Button width={['280px', '280px', '240px', '280px']}>
        learn more
      </Button>
    </Link>
  </ButtonWrapper>
)

const PlatformFeature = ({ image, title, description, learnMoreLink }) => (
  <Column
    justifyContent="space-between"
    width={[1, 1, 1 / 3]}
    my={2}
  >
    <ImageCard
      img={image}
      imgProps={{ height: ['200px', '200px', '175px', '245px'] }}
      title={title}
      description={description}
    />
    <LearnMoreButton to={learnMoreLink} />
  </Column>
)

const PlatformFeatures = () => (
  <AppContainer>
    <Box mx={2} mt={7}>
      <HeadingWithMaxWidth>
        Serverless Platform empowers developers to build & deploy serverless
        applications, on any provider.
      </HeadingWithMaxWidth>
    </Box>
    <ResponsiveStack.spaceBetween my={5}>
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