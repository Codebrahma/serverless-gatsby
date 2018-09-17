import React from 'react'
import { push } from 'gatsby-link'
import {
  Absolute,
  Background,
  Column,
  Heading,
  TertiaryButton,
  Relative,
  ResponsiveStack,
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
    title: 'San Francisco',
    img: SanFranciscoImage,
    isAvailable: false,
  },
  {
    title: 'Seattle',
    img: SeattleImage,
    isAvailable: false,
  },
  {
    title: 'New York',
    img: NewYorkImage,
    isAvailable: false,
  },
  {
    title: 'Atlanta',
    img: AtlantaImage,
    isAvailable: false,
  },
  {
    title: 'London',
    img: LondonImage,
    isAvailable: false,
  },
  {
    title: 'Private Workshop',
    img: PrivateWorkshopImage,
    isAvailable: true,
  },
]

const WorkshopListItem = ({ title, img, isAvailable }) => (
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
        </Relative>
        <Relative>
          <TertiaryButton
            width={1}
            onClick={() => push(`/resources/workshops/form?title=${title}`)}
          >
            {isAvailable ? 'contact us' : 'join waitlist'}
          </TertiaryButton>
        </Relative>
      </Column>
    </Background>
  </Relative>
)

const WorkshopList = () => (
  <AppContainer>
    <ResponsiveStack
      mt={[5, 5, 5, 5, 8]}
      mb={[300, 300, 12]}
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