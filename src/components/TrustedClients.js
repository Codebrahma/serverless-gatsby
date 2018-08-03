import React from 'react';

import { Flex, Box, P, Image } from 'serverless-design-system/src';

import ea from  '../assets/images/ea.png';
import cocoCola from  '../assets/images/cococola.png';
import nordStrom from  '../assets/images/nordstrom.png';
import expedia from  '../assets/images/expedia.png';
import retuers from  '../assets/images/reuters.png';

const TrustedCompanyImage = ({ imgSrc }) => (
  <Box mb={2}>
    <Image
      key={imgSrc}
      src={imgSrc}
      width={['80%', '80%', '80%', '100%']}
      maxHeight="40"
    />
  </Box>
);

const trustedClientImages = [
  ea,
  cocoCola,
  nordStrom,
  expedia,
  retuers,
];

// TODO: Decide on how we can include hardcoded px outside the spaces array
const TrustedClients = () => (
  <Box width={1} mb={['300px', '300px', '200px']}>
    <Box px={15} width={1}>
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <P fontSize={4}>
            Serverless platform is trusted by
          </P>
        </Box>
        <Flex
          flexDirection={['column', 'column%', 'row']}
          justifyContent="space-between"
          alignItems="center"
          width={1}
          px="10%"
          py="2%"
          boxSizing="border-box"
        >
          {trustedClientImages.map(imgSrc => <TrustedCompanyImage key={imgSrc} imgSrc={imgSrc} />)}
      </Flex>
    </Flex>
    </Box>
  </Box>
);

export default TrustedClients;