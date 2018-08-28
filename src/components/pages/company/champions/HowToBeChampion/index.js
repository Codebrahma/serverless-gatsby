import React from 'react'
import {
  Card,
  Flex,
  Box,
  TextWithIcon,
  Heading,
  P,
  Row,
  InlineBlock,
  Image,
  HorizontalRule,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'
import checkmarkIcon from 'src/assets/images/ok-icon.png'
import lionIcon from 'src/assets/images/lion-icon.png'

const serverlessChampions = [
  'Heroes in the serverless community',
  'Big evangelists of Serverless projects',
  'Though leaders in an enterprise cheering serverless',
  'Major contributors to open-source serverless projects',
  'Proactive at answering community questions and resolving issues',
  'Speakers at serverless conferences and meetups',
  'Builders of serverless projects, and teachers for those who are learning',
]

const memberReceivals = [
  'Limited-edition t-shirt and jacket with Serverless champion insignia',
  'Special recognition post on the Serverless.com blog',
  'Showcase on the Serverless Champions page with exclusive interview',
  'Serverless Champion sticker and digital badges',
  'Invitation to the Serverless Champions Slack channel',
  'Early product announcements and invitations to alpha/beta releases',
]

// TODO: SDS should have withespace property
const HowToBeChampion = () => (
  <AppContainer>
    <Flex.column pt={5}>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 0.65]} px={2}>
          <TextWithIcon
            iconSrc={redRectangleDots}
            iconHeight="32px"
            iconWidth="52px"
            iconTop="5px"
            iconLeft="-10px"
            backgroundSize="contain"
          >
            <Heading.h1
              fontFamily="SoleilBk"
              lineHeight={0}
              letterSpacing="h2"
              mt={1}
            >
              What does it take to become a Serverless Champion?
            </Heading.h1>
          </TextWithIcon>
          <Heading.h4 fontFamily="SoleilBk">
            Our Serverless Champions are:
          </Heading.h4>
          {
            serverlessChampions.map((champion, index) => (
              <Row
                mt={3}
                key={index}
                alignItems="center"
              >
                <InlineBlock mr={2}>
                  <Image src={checkmarkIcon} height="20px" width="20px" />
                </InlineBlock>
                <P
                  key={index}
                  my={0}
                  fontFamily='Soleilbk'
                >
                  {champion}
                </P>
              </Row>
            ))
          }
        </Box>

        <Box
          width={[1, 1, 0.35]}
          mt={[2, 2, 6, 8]}>
          <Card
            width={1}
            boxShadow='2px 2px 8px 0 #eaeaea'
            border='1px solid #eaeaea'
            px={4}
            py={3}
          >
            <Heading.h4
              fontSize={3}
              fontFamily='SoleilBk'
            >
              Our Benefits
            </Heading.h4>
            <HorizontalRule
              height="1px"
              color="#eaeaea"
            />

            {
              memberReceivals.map((benefit, index) => (
                <Row
                  mt={3}
                  alignItems="center"
                >
                  <Box mr={2}>
                    <Image src={lionIcon} height="40px" minWidth="40px" />
                  </Box>
                  <P
                    key={index}
                    my={0}
                    fontFamily='Soleilbk'
                  >
                    {benefit}
                  </P>
                </Row>
              ))
            }
          </Card>
        </Box>
      </Flex>
    </Flex.column>
  </AppContainer>
)

export default HowToBeChampion