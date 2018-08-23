import React from 'react'

import { Heading, TextWithIcon } from 'serverless-design-system/src'

import dotGridBackground from 'src/assets/images/dot-grid.png'

export default ({ children }) => (
  <TextWithIcon
    iconSrc={dotGridBackground}
    iconHeight='35px'
    iconWidth='60px'
    iconTop='-10px'
    iconLeft='-10px'
  >
    <Heading.h1
      fontFamily="SoleilBk"
      fontWeight="normal"
      lineHeight={0}
      letterSpacing={'h2'}
    >
      { children }
    </Heading.h1>
  </TextWithIcon>
)
