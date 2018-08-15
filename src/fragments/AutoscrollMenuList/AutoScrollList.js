import React from 'react'

import { Box, Flex, TextWithIcon, P, Heading } from 'serverless-design-system/src'
import RedRectangleDots from '../../assets/images/redRectangleDots.png'

const AutoScrollListItem = ({ title, contents }) => (
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

const AutoScrollList = ({ ComparisonListData }) => (
  <Box width={[1, 1, 2/3]}>
    {
      ComparisonListData.map((item, index) => (
        <AutoScrollListItem
          key={index}
          title={item.title}
          contents={item.contents}
        />
      ))
    }
  </Box>
)

export default AutoScrollList