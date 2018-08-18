import React from 'react'

import { Container, Flex, Box, TextWithIcon, Heading, P } from 'serverless-design-system/src'

import redRectangleDots from '../../../../assets/images/redRectangleDots.png'

const contactUsContent = [
  { title: 'Media Inquiries', contents: ['media@serverless.com'] },
  { title: 'Analysts', contents: ['analysts@serverless.com'] },
  { title: 'Careers', contents: ['careers@serverless.com'] },
  { title: 'Media Inquiries', contents: ['media@serverless.com', '325 9th Street', 'San Francisco, CA 94013']  }
]

// P Tag not aligning left
const ContactSection = ({ title, contents }) => (
  <Flex.column width={[1, 1, 4/10, 22/100]} my={2} mx={1} alignItems={['center', 'center', 'left']}>
    <Heading.h4 fontSize={4} align='left'>{title}</Heading.h4>
    {contents.map(content => <P key={title} fontSize={0} m={0} align='left'>{content}</P>)}
  </Flex.column>
)

const OurStory = () => (
  <Container width={1} mt={8} mb='400px'>
    <Flex.column px={3}>
      <Flex justifyContent='center'>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight='32px'
          iconWidth='50px'
          iconTop='10px'
          iconLeft='-10px'
        >
          <Heading.h1>Contact Us</Heading.h1>
        </TextWithIcon>
      </Flex>
      <Flex flexDirection={['column', 'column', 'row']}
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
      >
        {
          contactUsContent.map(({ title, contents }) => (
            <ContactSection
              key={title}
              title={title}
              contents={contents}
            />
          ))
        }
      </Flex>
    </Flex.column>
  </Container>
)

export default OurStory 