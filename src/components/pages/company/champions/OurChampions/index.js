import React from 'react'

import {
  Absolute,
  Background,
  Flex,
  Box,
  Image,
  P,
  Heading,
  Text,
  Relative,
  ResponsiveStack
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import Champion1 from 'src/assets/images/champion1.png'
import Champion2 from 'src/assets/images/champion2.png'
import Champion3 from 'src/assets/images/champion3.png'
import dotGridVertical from 'src/assets/images/dot-grid-vertical.png'

const champions = [
  {
    name: 'Takahiro Horike',
    image: Champion1,
    position: 'Software Engineer DigitalCube Co.Ltd'
  },
  {
    name: 'Marcia Villalba',
    image: Champion2,
    position: 'Senior Full-stack Developer Rovio'
  },
  {
    name: 'Ryan Scott Brown',
    image: Champion3,
    position: 'Senior Software Engineer Ansible by Red Hat'
  },
]

const ChampionCard = ({ name, image, position }) => (
  <Relative
    width={[1, 1, 3/10]}
    px={2}
    py={[2, 2, 2, 0]}
  >
    <Image
      src={image}
      alt={name}
      width={1}
      maxHeight="384px"
    />
    <Absolute
      bottom="15px"
      left="25px"
      zIndex={1}
    >
      <Background
        background={`url(${dotGridVertical})`}
        height="152px"
        width="80px"
        backgroundSize="cover"
      />
    </Absolute>
    <Flex>
      <Box width={4/10}></Box>
      <Box width={6/10}>
        <Heading.h4 mt={2} fontFamily='SoleilBk'>{name}</Heading.h4>
        <P>{position}</P>
      </Box>
    </Flex>
  </Relative>
)

const OurChampions = () => (
  <AppContainer>
    <Box py={[5, 5, 6]}>
      <Box my={[1, 2, 3, 4]}>
        <Heading.h2
          align="center"
          fontFamily="SoleilSb"
          lineHeight="1.4"
          my={1}
        >
          Our Serverless Champions
        </Heading.h2>
        {
          <Text.p
            align="center"
            fontFamily="Soleil"
            fontSize={1}
            lineHeight={3}
            color="gray.2"
          >
            Community ambassadors handpicked by us.
          </Text.p>
        }
      </Box>
      <ResponsiveStack
        justifyContent="center"
        mt={[1, 2, 2, 3]}
        my={12}
      >
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
      </ResponsiveStack>
    </Box>
  </AppContainer>
)

export default OurChampions