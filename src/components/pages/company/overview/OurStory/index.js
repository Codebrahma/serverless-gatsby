import React from 'react'

import {
  Column,
  P,
  TextWithIcon,
  Heading,
  ResponsiveStack,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'

const OurStory = () => (
  <AppContainer>
    <ResponsiveStack
      px={3}
      my={4}
    >
      <Column
        width={[1, 1, 1/3]}
        alignItems="center"
      >
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight="32px"
          iconWidth="52px"
          iconTop="-5px"
          iconLeft="-10px"
          backgroundSize="contain"
        >
          <Heading.h1
            fontFamily="SoleilBk"
            lineHeight={0}
            letterSpacing="h2"
            mt={1}
          >
            Our Story
          </Heading.h1>
        </TextWithIcon>
      </Column>
      <Column width={[1, 1, 2/3]}>
        <P>
          In 2015 when we released the Serverless Framework open source project, we had no idea what the serverless movement would become, or how fast it would grow.
        </P>
        <P>
          Today, at over 25,000 GitHub stars, the Serverless Framework is the main way developers deploy serverless applications on any FaaS provider. We have an entire ecosystem of tooling that organizations can use to build, operate and integrate their serverless applications at scale. We call it the Serverless Platform.
        </P>
        <P>
          At Serverless, Inc., we believe many things. We believe that a future with serverless technologies at its center is inevitable. That serverless will let developers focus less on administration, and more on driving business value to end users. That serverless will allow organizations to innovate and get to market more quickly.
        </P>
        <P>
          Most importantly, we believe that these are great things. Our mission is to empower every developer to go serverless.
        </P>
      </Column>
    </ResponsiveStack>
  </AppContainer>
)

export default OurStory