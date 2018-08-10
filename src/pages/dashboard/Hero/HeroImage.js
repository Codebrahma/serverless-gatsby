import React from 'react'
import { Flex, Box, Image } from 'serverless-design-system/src'

import dashboardIllustration from 'src/assets/images/dashboard-illustration.png'

const HeroImage = () => (
  <Flex.horizontallyCenter py={[0, 0, 3]} height={[0, 0, '100%']}>
    <Box width={[0, 0, 6 / 10]}>
      <Image src={dashboardIllustration} />
    </Box>
  </Flex.horizontallyCenter>
)

export default HeroImage
