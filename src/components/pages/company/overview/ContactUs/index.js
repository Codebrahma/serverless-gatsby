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
    mx={[0, 0, 1]}
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
    <Column px={[1, 1, 2, 3]} pt={[4, 4, 4, 8]} pb={[300, 300, 14]}>
      <Column alignItems={['center', 'center', 'flex-start']}>
        <TitleWithIcon>Contact Us</TitleWithIcon>
      </Column>
      <Box>
        <Text.p
          fontFamily="SoleilLt"
          fontSize={[3, 3, 4]}
          lineHeight={4}
          align={['center', 'center', 'left']}
          mt={0}
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