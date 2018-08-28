import React from 'react'
import {
  Card,
  Column,
  Box,
  P,
  TextWithIcon,
  Heading,
  Image,
  Row,
  InlineBlock,
  HorizontalRule,
  ResponsiveStack,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'
import team from 'src/assets/images/team.png'
import checkmarkIcon from 'src/assets/images/ok-icon.png'

const benefitList = [
  'Quality healthcare, dental, and vision plans',
  '401(k) Retirement savings account',
  'Unlimited paid time off policy',
  'SF commuter program',
  'Team Retreats',
]

const HowWeOperate = () => (
  <AppContainer>
    <Column>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight="32px"
        iconWidth="52px"
        iconTop="5px"
        iconLeft="-10px"
        backgroundSize="contain"
      >
        <Heading.h1
          fontSize={[6, 6, 6, 7]}
          fontFamily="SoleilBk"
          lineHeight={0}
          letterSpacing="h2"
          mt={1}
        >
          How We Operate
        </Heading.h1>
      </TextWithIcon>

      <ResponsiveStack>
        <Box width={[1, 1, 0.5]}>
          <P>
            We are a group of self-motivated hackers and creatives who believe that there is a better way to build applications. Our end goal is to make software development accessible to everyone, and we are starting by making it easier for software engineers. Our open source Framework has over 25,000 stars on Github (and counting).
          </P>
          <P>
            At Serverless, we strongly believe in the power of community. We believe in open source. We believe that the serverless movement is only just beginning, and will soon occupy the majority of the public cloud market. And we want to be the people who take it there.
          </P>
          <P>
            We are creating the environment developers will use to build, operate and integrate their applications at scale. To do this requires true forward-thinking. It requires a team that values openness, and that can be honest (yet compassionate) in their ideas and critiques. If you are one such person, we don’t care where you are located; we want to work with you.
          </P>
          <P>
            We are Serverless, Inc, and our mission is to enable developers to build more and manage less. We hope you’ll join us.
          </P>
        </Box>

        <Column
          alignItems='flex-end'
          width={[1, 1, 0.5]}
        >
          <Card
            width={[1, 1, 9/10, 9/10, 7/10]}
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
              benefitList.map((benefit, index) => (
                <Row
                  mt={3}
                  alignItems="center"
                >
                  <InlineBlock mr={2}>
                    <Image src={checkmarkIcon} height="40px" width="40px" />
                  </InlineBlock>
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
        </Column>
      </ResponsiveStack>
      <Box py={4}>
        <Image src={team} width={1} mt={4} />
      </Box>
    </Column>
  </AppContainer>
)

export default HowWeOperate