import React from 'react'

import { Container, Flex, Heading, TextWithIcon } from 'serverless-design-system/src'

import MeetupCard from 'src/fragments/UpcomingMeetupCard'

import meetupMember11 from '../../../../../assets/images/meetupMember11.png'
import meetupMember12 from '../../../../../assets/images/meetupMember12.png'
import meetupMember13 from '../../../../../assets/images/meetupMember13.png'
import meetupMember14 from '../../../../../assets/images/meetupMember14.png'
import redRectangleDots from '../../../../../assets/images/redRectangleDots.png'

const meetupData = [
  {
    title: 'Serverless London: April Meetup',
    schedule: {
      date: 'Wednesday, April 18, 2018',
      time: '6:30PM to 9:00PM',
    },
    address: {
      firstLine: 'LABS Holborn',
      secondLine: '136 High Holborn, London - WC1V 6PX',
    },
    attending: {
      memberImages: [meetupMember11, meetupMember12, meetupMember13, meetupMember14],
      plusCount: 20,
    }
  },
  {
    title: 'Serverless AI Services from AWS: Lex, Polly and Rekognition (Ankara)',
    schedule: {
      date: 'Tuesday, April 3, 2018',
      time: '6:30 PM to 8:30 PM',
    },
    address: {
      firstLine: 'ODTU Teknokent Ikizker Toplanti Salonu',
      secondLine: 'ODTU Teknokent · Ankara',
    },
    attending: {
      memberImages: [meetupMember11, meetupMember12, meetupMember13, meetupMember14],
      plusCount: 100,
    }
  },
]

const UpcomingMeetups = () => (
  <Container maxWidth={1} mb={8} mt={4} px={3}>
    <Flex flexDirection='column' alignItems='center'>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight='32px'
        iconWidth='50px'
        iconTop='-5px'
        iconLeft='-20px'
      >
        <Heading.h3>Upcoming Meetups</Heading.h3>
      </TextWithIcon>
      <Flex flexDirection={['column', 'column', 'row']}
        flexWrap='wrap' justifyContent='center'>
        {
          meetupData.map(({ title, schedule, address, attending}) => (
            <MeetupCard
              key={title}
              title={title}
              schedule={schedule}
              address={address}
              attending={attending}
            />
          ))
        }
      </Flex>
    </Flex>
  </Container>
)

export default UpcomingMeetups