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
    details: ['Software Engineer', 'DigitalCube Co.Ltd']
  },
  {
    name: 'Marcia Villalba',
    image: Champion2,
    details: ['Senior Full-stack Developer', 'Rovio']
  },
  {
    name: 'Ryan Scott Brown',
    image: Champion3,
    details: ['Senior Software Engineer', 'Ansible by Red Hat']
  },
]

const ChampionCard = ({ name, image, details }) => (
  <Relative
    width={[1, 1, 0.33]}
    maxWidth={400}
    px={[0, 0, 1, 2]}
    py={[2, 2, 2, 0]}
  >
    <Box
      width={1}
      minHeight={390}
    >
      <Image
        src={image}
        alt={name}
        width={1}
        maxHeight={384}
      />
      <Absolute
        bottom={[15, 15, 50, 15]}
        left={25}
        zIndex={1}
      >
        <Background
          background={`url(${dotGridVertical})`}
          height="152px"
          width="80px"
          backgroundSize="cover"
        />
      </Absolute>
      <Flex justifyContent="flex-end">
        <Box width={[0.6, 0.6, 0.9, 0.8, 0.65]}>
          <Heading.h4
            mt={2}
            fontFamily='SoleilBk'
            fontSize={[3, 3, 3, 4]}
          >
            {name}
          </Heading.h4>

          <P fontSize={[1, 1, 2]}>
            { details.map((detail) => (<Box>{ detail }</Box>)) }
          </P>
        </Box>
      </Flex>
    </Box>
  </Relative>
)

const OurChampions = () => (
  <AppContainer>
    <Box pt={2} pb={[8, 8, 5, 6]}>
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
        alignItems="center"
        justifyContent="center"
        mt={[1, 2, 2, 3]}
        my={12}
      >
        {
          champions.map((champion, index) => (
            <ChampionCard
              key={`champion-${index}`}
              {...champion}
            />
          ))
        }
      </ResponsiveStack>
    </Box>
  </AppContainer>
)

export default OurChampions