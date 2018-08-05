import React from 'react';
import {
  Flex,
  Box,
  Image,
} from 'serverless-design-system/src';

import dashboardIllustration from '../../../assets/images/dashboard-illustration.png';

const HeroImage = () => (
  <Flex justifyContent="center" py={[0, 0, 3]} height={[0, 0, '100%']}>
    <Box width={[0, 0, 0.6]}>
      <Image src={dashboardIllustration} />
    </Box>
  </Flex>
);

export default HeroImage;