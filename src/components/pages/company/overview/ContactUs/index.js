import React from 'react'
import {
  Box,
  Column,
  Heading,
  P,
  ResponsiveStack,
  Text,
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'

const contactUsContent = [
  { title: 'Media Inquiries', contents: ['media@serverless.com'] },
  { title: 'Analysts', contents: ['analysts@serverless.com'] },
  { title: 'Careers', contents: ['careers@serverless.com'] },
  { title: 'Media Inquiries', contents: ['media@serverless.com', '325 9th Street', 'San Francisco, CA 94013']  }
]

const ContactSection = ({ title, contents }) => (
  <Column
    width={[1, 1, 4/10, 22/100]}
    my={2}
    mx={1}
    alignItems={['center', 'center', 'flex-start']}
  >
    <Heading.h4
      fontFamily="SoleilBk"
      align='left'
      lineHeight={4}
    >
      {title}:
    </Heading.h4>
    {contents.map(content => <P key={title} fontSize={0} m={0} align='left'>{content}</P>)}
  </Column>
)

const OurStory = () => (
  <AppContainer>
    <Column px={3} pt={8} pb={[300, 300, 14]}>
      <Box>
        <TitleWithIcon>Contact Us</TitleWithIcon>
      </Box>
      <Box>
        <Text.p
          fontFamily="SoleilLt"
          fontSize={4}
          lineHeight={4}
        >
          We’d love to hear from you.
          <br />
          Please feel free to contact us via the following channels:
        </Text.p>
      </Box>
      <ResponsiveStack flexWrap='wrap'>
        {
          contactUsContent.map(({ title, contents }) => (
            <ContactSection
              key={title}
              title={title}
              contents={contents}
            />
          ))
        }
      </ResponsiveStack>
    </Column>
  </AppContainer>
)

export default OurStory