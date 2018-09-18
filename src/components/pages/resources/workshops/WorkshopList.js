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
import { company } from 'src/constants/urls'
import workshops from 'src/constants/workshops.json'
import SanFranciscoImage from 'src/assets/images/san-francisco.png'
import SeattleImage from 'src/assets/images/seattle.png'
import NewYorkImage from 'src/assets/images/new-york.png'
import AtlantaImage from 'src/assets/images/atlanda.png'
import LondonImage from 'src/assets/images/london.png'
import PrivateWorkshopImage from 'src/assets/images/private-workshop.png'
import verticalDotImage from 'src/assets/images/white-dots-grid-vertical.png'

const data = {
  'san-francisco' : SanFranciscoImage,
  'seattle' : SeattleImage,
  'new-york' : NewYorkImage,
  'atlanta' : AtlantaImage,
  'london' : LondonImage,
}

const WorkshopListItem = ({ keyName, title, img, isContactUs }) => (
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
            onClick={() => {
              isContactUs ? window.open(company.contact) : push(`/workshops/${keyName}`)
            }}
          >
            {isContactUs ? 'contact us' : 'join waitlist'}
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
        Object.keys(workshops).map((key) => (
          <WorkshopListItem
            key={key}
            keyName={key}
            title={workshops[key]}
            img={data[key]}
            isContactUs={false}
          />
        ))
      }
      <WorkshopListItem
        title="Private Workshop"
        img={PrivateWorkshopImage}
        isContactUs={true}
      />
    </ResponsiveStack>
  </AppContainer>
)

export default WorkshopList