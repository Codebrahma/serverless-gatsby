import React from 'react'

import {
  Box,
  Column,
  Container,
  Feature as FeatureItem,
  Flex,
  Heading,
} from 'serverless-design-system/src'

const Features = ({ features }) => (
  <Container>
    <Box px={2} pb={[300, 300, 10, 10]}>
      <Column px={[0, 0, 2, 5]} mt={5}>
        <Heading.h2 align='center' fontFamily='SoleilSb' my={4}>
          Features
        </Heading.h2>
        <Flex.row flexWrap='wrap' mt={3}>
          {features.map(({ header, img, content }, index) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              img={img}
              rightAligned={index % 2 === 0}
            />
          ))}
        </Flex.row>
      </Column>
    </Box>
  </Container>
)

export default Features