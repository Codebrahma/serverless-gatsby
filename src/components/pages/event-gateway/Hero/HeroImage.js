import React from 'react'
import { Flex, Box, Image } from 'serverless-design-system/src'

import gatewayIllustration from 'src/assets/images/gateway-illustration.png'

const HeroImage = () => (
  <Flex.horizontallyCenter py={[0, 0, 3]} height={[0, 0, '100%']}>
    <Box width={[0, 0, 6 / 10]}>
      <Image src={gatewayIllustration} />
    </Box>
  </Flex.horizontallyCenter>
)

export default HeroImage
