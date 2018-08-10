import React from 'react'

<<<<<<< HEAD
import { Box, Container } from 'serverless-design-system/src';
import { TrustedClients } from 'src/fragments';
=======
import { Box, Container } from 'serverless-design-system/src'
import TrustedClients from 'src/fragments/TrustedClients'
>>>>>>> run prettier

import backgroundImage from 'src/assets/images/rectangle-19.png'

export default () => (
  <Box
    width={1}
    backgroundImage={`url(${backgroundImage})`}
    px={[0, 0, 2, 6, 8]}
    pt={5}
    pb={[300, 300, 12, 12]}
  >
    <Container>
      <TrustedClients />
    </Container>
  </Box>
)
