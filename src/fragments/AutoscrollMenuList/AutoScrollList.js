import React from 'react'

import { Box, Flex, TextWithIcon, P, Heading, Image } from 'serverless-design-system/src'
import RedRectangleDots from '../../assets/images/redRectangleDots.png'

const AutoScrollListItem = ({ title, contents, image }) => (
  <Flex.column mb={5}>
    <Box mb={5}>
      <TextWithIcon
        iconSrc={RedRectangleDots}
        iconHeight='32px'
        iconWidth='50px'
        iconTop='10px'
        iconLeft='-20px'
      >
        <Heading.h1>{title}</Heading.h1>
      </TextWithIcon>
    </Box>
    <Image
      src={image}
      alt={title}
      width='800px'
    />
    {
      contents.map((content, index) => (
        <P key={index} mb={2}>
          {content}
        </P>
      ))
    }
  </Flex.column>
)

const AutoScrollList = ({ listData }) => (
  <Box width={[1, 1, 2/3]}>
    {
      listData.map((item, index) => (
        <AutoScrollListItem
          key={index}
          title={item.title}
          contents={item.contents}
          image={item.image}
        />
      ))
    }
  </Box>
)

export default AutoScrollList