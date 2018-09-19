import React from 'react'

import { Box, Column } from 'serverless-design-system/src'
import { Header, Footer } from 'src/components'

const DefaultLayout = ({ children, prefooter, transparentHeader, footerBackground }) => (
  <Column width={1}>
    <Header transparent={transparentHeader} />
    <Box width={1}>{children}</Box>
    <Footer prefooter={prefooter} footerBackground={footerBackground} />
  </Column>
)

export default DefaultLayout