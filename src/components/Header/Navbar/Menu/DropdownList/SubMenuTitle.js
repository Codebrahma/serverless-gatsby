import React from 'react'
import { Heading, TextWithIcon } from 'serverless-design-system/src'

import dotGridBackground from 'src/assets/images/dot-grid.png'

const SubMenuTitle = ({ children }) => (
  <TextWithIcon
    iconSrc={dotGridBackground}
    iconHeight='20px'
    iconWidth='25px'
    iconTop='-2px'
    iconLeft='-10px'
  >
    <Heading.h5
      m={0}
      p={0}
      color={'white'}
      fontSize={'1.9rem'}
      letterSpacing={'text'}
    >
      {children}
    </Heading.h5>
  </TextWithIcon>
)

export default SubMenuTitle