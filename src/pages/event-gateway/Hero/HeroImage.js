import React from 'react';
import {
  Flex,
  Box,
  Image,
  GatsbyImg
} from 'serverless-design-system/src';

import ImageContextHOC from '../../../components/ImageContextHOC';

const HeroImage = ({ gatewayIllustration }) => (
<Flex.horizontallyCenter
    py={[0, 0, 3]}
    height={[0, 0, '100%']}
  >
    <Box width={[0, 0, 6/10]}>
      <GatsbyImg title="gatewayIllustration" sizes={gatewayIllustration.sizes} />
    </Box>
  </Flex.horizontallyCenter>
);

export default ImageContextHOC(HeroImage, ['gatewayIllustration']);