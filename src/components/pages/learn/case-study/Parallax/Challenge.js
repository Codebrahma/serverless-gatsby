import React from 'react'

import { Flex, P, Image, TextWithIcon, Heading } from 'serverless-design-system/src'

import Parallax from '../../../../../assets/images/parallax.png'
import RedRectangleDots from '../../../../../assets/images/redRectangleDots.png'

const Challenge = () => (
  <Flex flexDirection={['column', 'column', 'row']} mt={8} px={3}>
    <Flex.column width={[1, 1, 5/10]} order={[2, 2, 1]}>
      <Image
        src={Parallax}
        alt='parallax' 
        width={[1, 1, 1]}
      />
    </Flex.column>
    <Flex.column width={[1, 1, 5/10]} order={[1, 1, 2]} pl={[0, 0, 5]}>
      <TextWithIcon
        iconSrc={RedRectangleDots}
        iconHeight='32px'
        iconWidth='50px'
        iconTop='10px'
        iconLeft='-10px'
      >
        <Heading.h1>The Challenge</Heading.h1>
      </TextWithIcon>
      <P>Parallax needed to figure out a way of creating a virtual recording studio to enable a million unique fans to sing along with David Guetta - their voices would then be sorted and compiled for inclusion in the final song.</P>
      <P>The main challenge they faced was creating the background architecture to handle the voice recording. UEFA required a stable platform that also looked the part, so they needed a solution that would not only meet their initial brief, but would scale to handle what could potentially be very spiky traffic.</P>
      <P>They also had to build in the functionality to create and easily share custom content - namely, personalized album artwork featuring names and team flags. From an engagement point of view, this was absolutely essential. On top of that, the site had to work seamlessly on all devices, operate in twelve languages and incorporate embedded video content.</P>
    </Flex.column>
  </Flex>
)

export default Challenge