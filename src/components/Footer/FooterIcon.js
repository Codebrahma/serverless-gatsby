import React from 'react'

import { Box, Image } from 'serverless-design-system/src'
import logo from '../../assets/images/logo.svg'

// Renders the Footer Icon
const FooterIcon = () => (
  <Box pt={[0, 0, 2]} pb={[0, 0, 7]} width={1}>
    <Image width={[0, 0, '138px']} src={logo} />
  </Box>
)

export default FooterIcon
