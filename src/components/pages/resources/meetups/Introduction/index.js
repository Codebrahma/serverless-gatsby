import React from 'react'

import { Flex, Heading, Image } from 'serverless-design-system/src'

import resourcesMeetupMap from '../../../../../assets/images/resourcesMeetupMap.png'

const Introduction = () => (
  <Flex.column mt={6} alignItems='center'>
    <Heading.h2 fontFamily='SoleilSb' fontSize='56px'>Find a Serverless meetup near you.</Heading.h2>
    <Heading.h6 fontFamily='SoleilSb' color='grey' fontSize={2}>Don't see a meetup in your city ? Contact us and start your own.</Heading.h6>
    <Image
      src={resourcesMeetupMap}
      alt='resources-map'
      mt={4}
    />
  </Flex.column>
)

export default Introduction