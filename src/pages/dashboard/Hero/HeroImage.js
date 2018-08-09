import React from 'react';
import {
  Flex,
  Box,
  GatsbyImg,
} from 'serverless-design-system/src';

const HeroImage = ({ dashboardIllustration }) => (
  <Flex.horizontallyCenter
    py={[0, 0, 3]}
    height={[0, 0, '100%']}
  >
    <Box width={[0, 0, 6/10]}>
      <GatsbyImg
        title="dashboard-illustration"
        alt="dashboard-illustration"
        sizes={dashboardIllustration.sizes}
      />
    </Box>
  </Flex.horizontallyCenter>
);

export default HeroImage;