import React from 'react'

import {
  Absolute,
  Background,
  Column,
  Image,
  P,
  Relative,
} from 'serverless-design-system/src'
import dotGridVertical from 'src/assets/images/dot-grid-vertical.png'

const TeamMemberImageCard = ({ name, position, image }) => (
  <Relative
    mt={[1, 1, 1, 4]}
    mx={[0, 1, '14px']}
    width={[159, 159, 176]}
  >
    <Image
      src={image}
      height={[159, 159, 176]}
      width={1}
    />
    <Column
      width={1}
      alignItems="left"
    >
      <P
        color='black'
        fontFamily='SoleilBk'
        fontSize={3}
        lineHeight={3}
        mt={1}
        mb={0}
      >
        {name}
      </P>
      <P
        color='black'
        fontFamily='SoleilBk'
        fontSize={0}
        color='gray.2'
        lineHeight={2}
        mt={1}
        mb={0}
      >
        {position}
      </P>
    </Column>
    <Absolute
      top="45px"
      right="-10px"
      zIndex={1}
    >
      <Background
        height="152px"
        width="20px"
        background={`url(${dotGridVertical})`}
        backgroundSize="cover"
      />
    </Absolute>
  </Relative>
)

export default TeamMemberImageCard