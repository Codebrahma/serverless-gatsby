import React from 'react'

import { Background, Box, Container, ImageList } from 'serverless-design-system/src'

import eaLogo from 'src/assets/images/ea-logo.png'
import cocacolaLogo from 'src/assets/images/cocacola-logo.png'
import nordstromLogo from 'src/assets/images/nordstrom-logo.png'
import expediaLogo from 'src/assets/images/expedia-logo.png'
import reutersLogo from 'src/assets/images/reuters-logo.png'

import backgroundImage from 'src/assets/images/rectangle-19.png'

const TrustedClientList = [
  { src: eaLogo, altText: 'EA' },
  { src: cocacolaLogo, altText: 'Coca Cola' },
  { src: nordstromLogo, altText: 'NordStrom' },
  { src: expediaLogo, altText: 'Expedia' },
  { src: reutersLogo, altText: 'Reuters' },
]

const HomeTrustedClients = () => (
  <Background backgroundImage={`url(${backgroundImage})`}>
    <Box
      width={1}
      px={[0, 0, 2, 6, 8]}
      pt={5}
      pb={[300, 300, 12, 12]}
    >
      <Container>
        <ImageList
          maxHeight={['41px', '41px', '41px', '60px']}
          maxWidth={['80%', '80%', '60%', '80%', '100%']}
          list={TrustedClientList}
        />
      </Container>
    </Box>
  </Background>
)

export default HomeTrustedClients