import React from 'react'
import {
  Flex,
  Box,
  TextWithIcon,
  Heading,
  P,
  Image
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'
import learnDashboardAboutFramework from 'src/assets/images/learnDashboardAboutFramework.png'

const AboutServerlessFramework = () => (
  <AppContainer>
    <Flex flexDirection={['column', 'column', 'row']}>
      <Box width={[1, 1, 1/2]}>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconWidth='50px'
          iconTop='0'
          iconLeft='0'
          iconHeight='32px'
        >
          <Heading.h2>The Serverless Framework</Heading.h2>
        </TextWithIcon>
        <P>If the Serverless Application is the new and improved application house on the block, then the Serverless Framework is the door you use to enter that house.</P>
        <P>Serverless Applications are the next step in cloud-native development, and they require automation. If youre trying together multiple managed services and functions, you cannot rely on a checklist of manual steps. You should be able to recreate your entire application with a command.</P>
        <P>That is where the Serverless Framework comes in. Use the Serverless Framework CLI to build and deploy your application to any and every cloud provider with a consistent experience. The Framework automatically configures cloud vendor settings for you, based on the language you use and the cloud provider you deploy to.</P>
        <P>Keeping a maniacal focus on business value applies to your development tooling as well. Kids, don't roll your own deployment tools.</P>
      </Box>
        <Box width={[1, 1, 1/2]}>
          <Image src={learnDashboardAboutFramework} alt='about-serverless-framework' />
        </Box>
    </Flex>
  </AppContainer>
)

export default AboutServerlessFramework