import React from 'react'
import {
  Absolute,
  Background,
  Flex,
  Relative,
  Heading,
  P,
  Image,
  Card,
  Text,
} from 'serverless-design-system/src'

import verticalRedRectangleDots from 'src/assets/images/verticalRedRectangleDots.svg'

const MeetupCard = ({ title, schedule, address, attending }) => (
  <Relative
    maxWidth='350px'
    mx={[0, 0, 2]}
    my={[1, 1, 2]}
  >
    <Card
      width={1}
      border="1px solid #dfe5e6"
      boxShadow='2px 2px 8px 0 #dfe5e6'
      p={3}
    >
      <Absolute
        top='30px'
        left='-10px'
        zIndex={1}
      >
        <Background background="white">
          <Image
            src={verticalRedRectangleDots}
            height={[44, 44, 44, 60]}
            width={[22, 22, 22, 28]}
          />
        </Background>
      </Absolute>
      <Heading.h4
        fontFamily="SoleilBk"
        lineHeight={3}
        letterSpacing="h5"
      >
        {title}
      </Heading.h4>
      <Heading.h6
        color="gray.3"
        fontFamily="SoleilBk"
        lineHeight={4}
        mt={3}
      >
        {schedule.date}
      </Heading.h6>
      <P
        fontSize={0}
        lineHeight={3}
        color="gray.2"
      >
        {schedule.time}
      </P>
      <Heading.h5
        fontFamily="SoleilBk"
        letterSpacing="h6"
        mt={4}
      >
        {address.firstLine}
      </Heading.h5>
      <P
        fontFamily="SoleilBk"
        color="gray.3"
        m={0}
      >
        {address.secondLine}
      </P>
      <P
        fontSize={1}
        color="gray.2"
        mt={2}
        mb={1}
      >
        Attending:
      </P>
      <Flex>
        <React.Fragment>
          {
            attending.memberImages.map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                width='32px'
                height='32px'
              />
            ))
          }
          <Flex.center
            bg='gray.1'
            width='32px'
            height='32px'>
            <Text.span
              fontSize={0}
              color='gray.2'
              fontWeight='bold'
            >
              {`${attending.plusCount}+`}
            </Text.span>
          </Flex.center>
        </React.Fragment>
      </Flex>
    </Card>
  </Relative>
)

export default MeetupCard