import React from 'react'

import { Container, Flex, TextWithIcon, Heading } from 'serverless-design-system/src'

import { TeamMemberImageCard } from 'src/fragments'
import redRectangleDots from '../../../../assets/images/redRectangleDots.png'
import teamMember01 from '../../../../assets/images/teamMember01.png'

const teamMembers = [
  { image: teamMember01, name: 'Austen Collins', position: 'Founder & CEO' },
  { image: teamMember01, name: 'Nick Gottlieb', position: 'VP of Growth' },
  { image: teamMember01, name: 'Ganesh Radhakrishnan', position: 'VP of Engineering' },
  { image: teamMember01, name: 'Bill Fine', position: 'VP of Product' },
  { image: teamMember01, name: 'Casey Shultz', position: 'Head of Operations' },
  { image: teamMember01, name: 'Phillip Müns', position: 'Framework Core Developer' },
  { image: teamMember01, name: 'Eslam Hefnawy', position: 'Framework Core Developer' },
  { image: teamMember01, name: 'Maciej Winnicki', position: 'Platform Engineer' },
  { image: teamMember01, name: 'Brian Neisler', position: 'Product Manager' },
  { image: teamMember01, name: 'Alex DeBrie', position: 'Lead Pythonista' },
  { image: teamMember01, name: 'Jeremy Coffield', position: 'Platform Architect' },
  { image: teamMember01, name: 'Raees Iqbal', position: 'Software engineer' },
  { image: teamMember01, name: 'Steve Westergaard', position: 'Software engineer' },
  { image: teamMember01, name: 'Sebastian Borza', position: 'Founder engineer' },
  { image: teamMember01, name: 'Andrea Passwater', position: 'Lead Content Strategist' },
  { image: teamMember01, name: 'André Pires', position: 'Lead Growth Designer' },
  { image: teamMember01, name: 'Thom Crowe', position: 'Community manager' },
  { image: teamMember01, name: 'Eric Scher', position: 'Enterprise Account Executive' },
  { image: teamMember01, name: 'Charmmie Hendon', position: 'Executive Assistant' },
  { image: teamMember01, name: 'Bumper', position: 'Chief Snuggles Officer' },
]

const OurTeam= () => (
  <Container width={1} mb='400px' mt={4}>
    <Flex flexDirection='column' px={3}>
      <Flex justifyContent='center'>
        <TextWithIcon
          iconSrc={redRectangleDots}
          iconHeight='32px'
          iconWidth='50px'
          iconTop='10px'
          iconLeft='-10px'
        >
          <Heading.h1>Our Team</Heading.h1>
        </TextWithIcon> 
      </Flex>
      <Flex flexWrap='wrap' justifyContent='center'>
        {
          teamMembers.map(({ image, name, position }) => (
            <TeamMemberImageCard
              key={name}
              image={image}
              name={name}
              position={position}
            />
          ))
        }
      </Flex>
    </Flex>
  </Container>
)

export default OurTeam