import React from 'react'
import { Flex, Box, Image } from 'serverless-design-system/src'

import frameworkIllustrator from 'src/assets/images/frameworkIllustration.png'

const HeroImage = () => (
  <Flex.horizontallyCenter py={[0, 0, 3]} height={[0, 0, '100%']}>
    <Box width={[0, 0, 6 / 10]}>
      <Image src={frameworkIllustrator} maxHeight='230px' />
    </Box>
  </Flex.horizontallyCenter>
)

export default HeroImage
