import React from 'react'

import {
  Background,
  Box,
  Container,
  Heading,
  ImageList,
} from 'serverless-design-system/src'

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

const TrustedClients = () => (
  <Background backgroundImage={['', '', `url(${backgroundImage})`]}>
    <Container>
      <Box
        width={1}
        pt={[0, 0, 5]}
        pb={[300, 300, 12, 12]}
        px={[15, 15, 2, 6, 8]}
      >
        <Heading.h5
          align="center"
          fontFamily="SoleilBk"
          fontSize={4}
          letterSpacing="h5"
          lineHeight={0}
          mb={4}
        >
          Serverless Platform is trusted by
        </Heading.h5>
        <ImageList
          maxHeight={['41px', '41px', '41px', '50px']}
          maxWidth={['100%', '100%', '85%', '80%', '100%']}
          objectFit='contain'
          containerProps={{ maxWidth: '200px' }}
          list={TrustedClientList}
        />
      </Box>
    </Container>
  </Background>
)

export default TrustedClients
