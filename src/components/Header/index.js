import React from 'react'

import { Box, Logo } from 'serverless-design-system/src'
import Navbar from './navbar'

export default () => (
  <Box
    position='fixed'
    width={1}
    left={0}
    right={0}
    top={0}
    zIndex='999'
    bg='black'
    py={[2, 2, 0, 0, 0]}>
    <Box
      px='15px'
      m='auto'
      maxWidth='1'
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      alignItems='center'
      justifyContent='space-between'
    >
      <Logo
        src='https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png'
        height="30px"
        width="170px"
        alt="Serverless"
      />
      <Navbar />
    </Box>
  </Box>
)
