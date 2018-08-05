import React from 'react';

import { Flex, Box, Container, P, Image } from 'serverless-design-system/src';
import backgroundImage from '../assets/images/rectangle-19.png';
import eaLogo from '../assets/images/ea-logo.png';
import cocacolaLogo from '../assets/images/cocacola-logo.png';
import nordstromLogo from '../assets/images/nordstrom-logo.png';
import expediaLogo from '../assets/images/expedia-logo.png';
import reutersLogo from '../assets/images/reuters-logo.png';

const TrustedClient = () => (
  <Box
    width={1}
    backgroundImage={`url(${backgroundImage})`}
    py={5}
    px={[ 0, 0, 2, 6, 8 ]}
  >
    <Container>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        flexDirection={['column', 'column', 'row']}
        width={1}
      >
        <Image
          src={eaLogo}
          alt='EA'
          maxHeight={['41px', '41px', '41px', '60px']}
          maxWidth={[ '80%', '80%', '60%', '80%', '100%' ]}
          my={2}
        />
        <Image
          src={cocacolaLogo}
          alt='Coca Cola'
          maxHeight={['41px', '41px', '41px', '60px']}
          maxWidth={[ '80%', '80%', '60%', '80%', '100%' ]}
          my={2}
        />
        <Image
          src={nordstromLogo}
          alt='Nordstrom'
          maxHeight={['41px', '41px', '41px', '60px']}
          maxWidth={[ '80%', '80%', '60%', '80%', '100%' ]}
          my={2}
        />
        <Image
          src={expediaLogo}
          alt='Expedia'
          maxHeight={['41px', '41px', '41px', '60px']}
          maxWidth={[ '80%', '80%', '60%', '80%', '100%' ]}
          my={2}
        />
        <Image
          src={reutersLogo}
          alt='Reuters'
          maxHeight={['41px', '41px', '41px', '60px']}
          maxWidth={[ '80%', '80%', '60%', '80%', '100%' ]}
          my={2}
        />
      </Flex>
    </Container>
  </Box>
);

export default TrustedClient;