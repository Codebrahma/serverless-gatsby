import React from 'react'
import { Flex } from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { TeamMemberImageCard, TitleWithIcon } from 'src/fragments'
import austin from 'src/assets/images/team/austin.png'
import nick from 'src/assets/images/team/nick.png'
import ganesh from 'src/assets/images/team/ganesh.png'
import bill from 'src/assets/images/team/bill.png'
import casey from 'src/assets/images/team/casey.png'
import philip from 'src/assets/images/team/philip.png'
import eslam from 'src/assets/images/team/eslam.png'
import maciej from 'src/assets/images/team/maciej.png'
import brian from 'src/assets/images/team/brian.png'
import alex from 'src/assets/images/team/alex.png'
import jeremy from 'src/assets/images/team/jeremy.png'
import raees from 'src/assets/images/team/raees.png'
import steve from 'src/assets/images/team/steve.png'
import sebastian from 'src/assets/images/team/sebastian.png'
import jonathan from 'src/assets/images/team/jonathan.png'
import andrea from 'src/assets/images/team/andrea.png'
import andre from 'src/assets/images/team/andre.png'
import thom from 'src/assets/images/team/thom.png'
import eric from 'src/assets/images/team/eric.png'
import charmmie from 'src/assets/images/team/charmmie.png'
import bumper from 'src/assets/images/team/bumper.png'

const teamMembers = [
  { image: austin, name: 'Austen Collins', position: 'Founder & CEO' },
  { image: nick, name: 'Nick Gottlieb', position: 'VP of Growth' },
  { image: ganesh, name: 'Ganesh Radhakrishnan', position: 'VP of Engineering' },
  { image: bill, name: 'Bill Fine', position: 'VP of Product' },
  { image: casey, name: 'Casey Shultz', position: 'Head of Operations' },
  { image: philip, name: 'Phillip Müns', position: 'Framework Core Developer' },
  { image: eslam, name: 'Eslam Hefnawy', position: 'Framework Core Developer' },
  { image: maciej, name: 'Maciej Winnicki', position: 'Platform Engineer' },
  { image: brian, name: 'Brian Neisler', position: 'Product Manager' },
  { image: alex, name: 'Alex DeBrie', position: 'Lead Pythonista' },
  { image: jeremy, name: 'Jeremy Coffield', position: 'Platform Architect' },
  { image: raees, name: 'Raees Iqbal', position: 'Software engineer' },
  { image: steve, name: 'Steve Westergaard', position: 'Software engineer' },
  { image: sebastian, name: 'Sebastian Borza', position: 'Software engineer' },
  { image: jonathan, name: 'Jonathan Lucas', position: 'Software engineer' },
  { image: andrea, name: 'Andrea Passwater', position: 'Lead Content Strategist' },
  { image: andre, name: 'André Pires', position: 'Lead Growth Designer' },
  { image: thom, name: 'Thom Crowe', position: 'Community manager' },
  { image: eric, name: 'Eric Scher', position: 'Enterprise Account Executive' },
  { image: charmmie, name: 'Charmmie Hendon', position: 'Executive Assistant' },
  { image: bumper, name: 'Bumper', position: 'Chief Snuggles Officer' },
]

const OurTeam= () => (
  <AppContainer>
    <Flex flexDirection='column'>
      <Flex
        justifyContent='center'
        mt={3}
        mb={[0, 0, 1, 2]}
      >
        <TitleWithIcon>Our Team</TitleWithIcon>
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
  </AppContainer>
)

export default OurTeam