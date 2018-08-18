import React from 'react'

import { Box, Image, P } from 'serverless-design-system/src'

const TeamMemberImageCard = ({ name, position, image }) => (
  <Box key={image}>
    <Image
      src={image}
      height='176px'
      weight='176px'
      mt={4}
      pr={2}
    />
    <P color='black' fontFamily='SolielBk' fontSize={3} lineHeight={3} mt={1} mb={0}>{name}</P>
    <P color='black' fontFamily='SolielBk' fontSize={0} color='gray.2' mt={1} mb={0}>{position}</P>
  </Box>
)

export default TeamMemberImageCard