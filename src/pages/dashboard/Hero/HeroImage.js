import React from 'react'
import { Flex, Box, GatsbyImg } from 'serverless-design-system/src'

import PickImgFromContext from '../../../components/HOC/ImageContext'

const HeroImage = ({ dashboardIllustration }) => (
  <Flex.horizontallyCenter py={[0, 0, 3]} height={[0, 0, '100%']}>
    <Box width={[0, 0, 6 / 10]}>
    <GatsbyImg sizes={dashboardIllustration.sizes} />
    </Box>
  </Flex.horizontallyCenter>
)

export default PickImgFromContext(HeroImage, ['dashboardIllustration'])
