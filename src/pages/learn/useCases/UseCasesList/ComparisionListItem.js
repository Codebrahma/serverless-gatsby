import React from 'react'

import { Flex, Box, TextWithIcon, P, Heading } from 'serverless-design-system/src'
import RedRectangleDots from '../../../../assets/images/redRectangleDots.png'

const ComparisionListItem = ({ title, contents }) => (
  <Flex.column>
    <TextWithIcon
      iconSrc={RedRectangleDots}
      iconHeight='32px'
      iconWidth='50px'
      iconTop='20px'
      iconLeft='0'
    >
      <Heading.h1>{title}</Heading.h1>
    </TextWithIcon>
    {
      contents.map((content, index) => (
        <P key={index} mb={2}>
          {content}
        </P>
      ))
    }
  </Flex.column>
)

export default ComparisionListItem