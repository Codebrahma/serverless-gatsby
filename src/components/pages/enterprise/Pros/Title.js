import React from 'react'
import { Heading, TextWithIcon } from 'serverless-design-system/src'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'

export default ({ children }) => (
  <TextWithIcon
    iconSrc={redRectangleDots}
    iconHeight='35px'
    iconWidth='80px'
    iconTop='-12px'
    iconLeft='-15px'
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
