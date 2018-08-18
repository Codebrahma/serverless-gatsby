import React from 'react'

import { Flex, Box, Container, Image, P, Heading } from 'serverless-design-system/src'

import Champion1 from '../../../../../assets/images/champion1.png'

const champions = [
  {
    name: 'Takahiro Horike',
    image: Champion1,
    position: 'Software Engineer DigitalCube Co.Ltd'
  },
  {
    name: 'Marcia Villalba',
    image: Champion1,
    position: 'Senior Full-stack Developer Rovio'
  },
  {
    name: 'Ryan Scott Brown',
    image: Champion1,
    position: 'Senior Software Engineer Ansible by Red Hat'
  },

]

const ChampionCard = ({ name, image, position }) => (
  <Box width={3/10} mx={2}>
    <Image src={image} alt={name} width='384px' height='384px' />
    <Flex>
      <Box width={4/10}></Box>
      <Box width={6/10}>
        <Heading.h4 mt={2} fontFamily='SoleilBk'>{name}</Heading.h4>
        <P>{position}</P>
      </Box>
    </Flex>
  </Box>
)

const OurChampions = () => (
  <Container width={1} mt={8} mb='400px'>
    <Flex alignItems='center' justifyContent='center'>
      <Heading.h2>Our Serverless Champions</Heading.h2>
    </Flex>
    <Flex flexDirection={['column', 'column', 'row']} mt={3}>
      {
        champions.map(({ name, image, position }) => (
          <ChampionCard
            key={name}
            name={name}
            image={image}
            position={position}
          />
        ))
      }
    </Flex>
  </Container>
)

export default OurChampions