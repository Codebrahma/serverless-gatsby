import React from 'react'

import { Container, Flex, Box, Heading, P, Image, TextWithIcon } from 'serverless-design-system/src'

import meetupMember11 from '../../../../../assets/images/meetupMember11.png'
import meetupMember12 from '../../../../../assets/images/meetupMember12.png'
import meetupMember13 from '../../../../../assets/images/meetupMember13.png'
import meetupMember14 from '../../../../../assets/images/meetupMember14.png'
import redRectangleDots from '../../../../../assets/images/redRectangleDots.png'
import verticalRedRectangleDots from '../../../../../assets/images/verticalRedRectangleDots.png'

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

// Hardcoded color
const MeetupCard = ({ title, schedule, address, attending }) => (
  <Flex minHeight='384px' width='384px' mx={2} mt={3}>
    <Box.relative width={1} boxShadow='2px 2px 8px 0 #dfe5e6' px={3} py={3}>
      <Box.absolute top='30px' left='-10px'>
        <Image src={verticalRedRectangleDots} />
      </Box.absolute>
      <Heading.h4 fontSize={4} fontFamily='SoleilBk'>
        {title}
      </Heading.h4>
      <Heading.h5 fontSize={2} fontFamily='SoleilBk' mt={3}>
        {schedule.date}
      </Heading.h5>
      <P fontSize={0}>
        {schedule.time}
      </P>
      <Heading.h5 fontSize={2} fontFamily='SoleilBk' mt={4}>
        {address.firstLine}
      </Heading.h5>
      <P fontSize={2} fontFamily='SoleilBk'>
        {address.secondLine}
      </P>
      <P fontSize={1}>
        Attending:
      </P>
      <Flex>
        <React.Fragment>
          {attending.memberImages.map(imgSrc => (
            <Image
              key={imgSrc}
              src={imgSrc}
              width='32px'
              height='32px'
            />
          ))}
          <Flex bg='gray.1' width='32px' height='32px' alignItems='center' justifyContent='center'>
            <P fontSize={0} color='gray.2' fontWeight='bold'>
              {`${attending.plusCount}+`}
            </P>
          </Flex>
        </React.Fragment>
      </Flex>
    </Box.relative>
  </Flex>
)

const ServerlessUserGroups = () => (
  <Container maxWidth={1} mb='400px' mt={4} px={3}>
    
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
      <Flex flexDirection={['column', 'column', 'row']}>
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

export default ServerlessUserGroups