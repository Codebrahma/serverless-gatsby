import React from 'react';

import { Flex, Box, Container, P, Image } from 'serverless-design-system/src';
import backgroundImage from '../assets/images/rectangle-19.png';
import eaLogo from '../assets/images/ea-logo.png';
import cocacolaLogo from '../assets/images/cocacola-logo.png';
import nordstromLogo from '../assets/images/nordstrom-logo.png';
import expediaLogo from '../assets/images/expedia-logo.png';
import reutersLogo from '../assets/images/reuters-logo.png';

const TrustedClientLogo = ({ src: logo, altText }) => (
  <Image
    src={logo}
    alt={altText}
    maxHeight={['41px', '41px', '41px', '60px']}
    maxWidth={[ '80%', '80%', '60%', '80%', '100%' ]}
    my={2}
  />
)

const TrustedClients = () => (
  <Box
    width={1}
    backgroundImage={`url(${backgroundImage})`}
    px={[ 0, 0, 2, 6, 8 ]}
    pt={5}
    pb={[6, 6, 9, 12]}
  >
    <Container>
      <Flex.verticallyCenter
        justifyContent='space-between'
        flexDirection={['column', 'column', 'row']}
        width={1}
      >
        <TrustedClientLogo src={eaLogo} altText='EA' />
        <TrustedClientLogo src={cocacolaLogo} altText='Coca Cola' />
        <TrustedClientLogo src={nordstromLogo} altText='Nordstrom' />
        <TrustedClientLogo src={expediaLogo} altText='Expedia' />
        <TrustedClientLogo src={reutersLogo} altText='Reuters' />
      </Flex.verticallyCenter>
    </Container>
  </Box>
);

export default TrustedClients;