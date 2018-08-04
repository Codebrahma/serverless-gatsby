import React from 'react';
import {
  Flex,
  Box,
  Image,
} from 'serverless-design-system/src';

import frameworkIllustrator from '../../../assets/images/frameworkIllustration.png';

const HeroImage = () => (
  <Flex justifyContent="center" py={2}>
    <Box width={[0, 0, 0.6]}>
      <Image
        src={frameworkIllustrator}
        maxHeight="230px"
      />
    </Box>
  </Flex>
);

export default HeroImage;