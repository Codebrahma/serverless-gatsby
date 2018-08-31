import React from 'react'
import { TextWithIcon, Heading } from 'serverless-design-system/src'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'

export default ({ children }) => (
  <TextWithIcon
    iconSrc={redRectangleDots}
    iconHeight="30px"
    iconWidth={["60px", "60px", "60px", "75px"]}
    iconTop={["-10px", "-10px", "-10px", "-5px"]}
    iconLeft={["-10px", "-10px", "-10px", "-5px"]}
    backgroundSize="contain"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
  >
    <Heading.h2
      fontFamily="SoleilBk"
      fontSize={[5, 5, 5, 7]}
      lineHeight={0}
      letterSpacing="0.5px"
    >
      { children }
    </Heading.h2>
  </TextWithIcon>
)
