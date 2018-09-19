import React from 'react'
import {
  Column,
  P,
  ResponsiveStack,
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'

const OurStory = () => (
  <AppContainer>
    <ResponsiveStack
      px={[0, 0, 0, 1, 3]}
      mt={[5, 5, 6, 10]}
      mb={[2, 2, 3, 6]}
    >
      <Column
        width={[1, 1, 1/3]}
        alignItems="center"
      >
        <TitleWithIcon>
          Our Story
        </TitleWithIcon>
      </Column>
      <Column width={[1, 1, 2/3]}>
        <P mt={0}>
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