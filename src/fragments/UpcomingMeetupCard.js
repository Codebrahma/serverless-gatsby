import React from 'react'
import { Flex, Box, Heading, P, Image } from 'serverless-design-system/src'

import verticalRedRectangleDots from '../assets/images/verticalRedRectangleDots.png'

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

export default MeetupCard