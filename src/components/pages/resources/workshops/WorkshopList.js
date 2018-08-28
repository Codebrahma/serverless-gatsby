import React from 'react'
import {
  Absolute,
  Background,
  Column,
  Heading,
  P,
  SecondaryButton,
  Relative,
  ResponsiveStack,
  Text,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import SanFranciscoImage from 'src/assets/images/san-francisco.png'
import SeattleImage from 'src/assets/images/seattle.png'
import NewYorkImage from 'src/assets/images/new-york.png'
import AtlantaImage from 'src/assets/images/atlanda.png'
import LondonImage from 'src/assets/images/london.png'
import PrivateWorkshopImage from 'src/assets/images/private-workshop.png'
import verticalDotImage from 'src/assets/images/white-dots-grid-vertical.png'

const workshopList = [
  {
    title: 'SanFrancisco',
    cost: '$1095/person',
    img: SanFranciscoImage,
    isAvailable: false,
  },
  {
    title: 'Seattle',
    cost: '$1095/person',
    img: SeattleImage,
    isAvailable: false,
  },
  {
    title: 'New York',
    cost: '$1095/person',
    img: NewYorkImage,
    isAvailable: false,
  },
  {
    title: 'Atlanta',
    cost: '$1095/person',
    img: AtlantaImage,
    isAvailable: false,
  },
  {
    title: 'London',
    cost: '$1095/person',
    img: LondonImage,
    isAvailable: false,
  },
  {
    title: 'Private Workshop',
    cost: '$1095/person',
    img: PrivateWorkshopImage,
    isAvailable: true,
  },
]

const WorkshopListItem = ({ title, cost, img, isAvailable }) => (
  <Relative
    p="16px"
    width={[1, 1, 1/2, 0.33]}
  >
    <Background
      background={`url(${img})`}
      backgroundSize="cover"
      height="400px"
      minHeight="300px"
    >
      <Absolute
        right="-5px"
        top="-5px"
      >
        <Background
          height="200px"
          width="64px"
          background={`url(${verticalDotImage})`}
          backgroundSize="cover"
        />
      </Absolute>
      <Column
        height="fullHeight"
        justifyContent="space-between"
        p={[2, 2, 4]}
      >
        <Relative>
          <Heading.h3
            fontFamily="SoleilBk"
            font
            mb={1}
            color="white"
            letterSpacing="h4"
          >
            {title}
          </Heading.h3>
          <Text.p
            color="white"
            fontSize={1}
            lineHeight={1}
            letterSpacing="text"
          >
            {cost}
          </Text.p>
        </Relative>
        <Relative>
          <P fontSize={0} color='white'>
            {
              isAvailable ?
                `We’ll work with you privately in a one on one session to empower your team with serverless knowledge.`
              :
                `Dates for this workshop have not been finalized. Join the waitlist to get notified as soon as the dates are set.`
            }
          </P>
          <SecondaryButton background='white' width={1}>
            {isAvailable ? 'contact us' : 'join waitlist'}
          </SecondaryButton>
        </Relative>
      </Column>
    </Background>
  </Relative>
)

const WorkshopList = () => (
  <AppContainer>
    <ResponsiveStack
      mt={[5, 5, 5, 5, 8]}
      mb={12}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {
        workshopList.map(({ title, cost, img, isAvailable }) => (
          <WorkshopListItem
            key={title}
            title={title}
            cost={cost}
            img={img}
            isAvailable={isAvailable}
          />
        ))
      }
    </ResponsiveStack>
  </AppContainer>
)

export default WorkshopList