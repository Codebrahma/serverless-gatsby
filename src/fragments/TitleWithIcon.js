import React from 'react'
import { TextWithIcon, Heading } from 'serverless-design-system/src'
import redRectangleDots from 'src/assets/images/redRectangleDots.svg'

export default ({ children, ...otherProps }) => (
  <TextWithIcon
    iconSrc={redRectangleDots}
    iconHeight={["30px", "30px", "30px", "38px"]}
    iconWidth={["60px", "60px", "60px", "98px"]}
    iconTop={["-10px", "-10px", "-10px", "-10px"]}
    iconLeft={["-10px", "-12px", "-14px", "-18px"]}
    backgroundSize="contain"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
  >
    <Heading.h2
      fontFamily="SoleilBk"
      fontSize={[5, 5, 5, 7]}
      lineHeight={0}
      letterSpacing="0.5px"
      {...otherProps}
    >
      { children }
    </Heading.h2>
  </TextWithIcon>
)
