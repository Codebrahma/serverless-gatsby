import React from 'react'

import {
  Container,
  Feature as FeatureItem,
  Flex,
  Heading,
} from 'serverless-design-system/src'

const Features = ({ features }) => (
  <Container px={2} pb={[300, 300, 10, 10]}>
    <Flex flexDirection='column' px={[0, 0, 2, 5]} mt={5}>
      <Heading.h2 align='center' fontFamily='SoleilSb' my={4}>
        Features
      </Heading.h2>
      <Flex flexDirection='row' flexWrap='wrap' mt={3}>
        {features.map(({ header, img, content }, index) => (
          <FeatureItem
            key={header}
            header={header}
            content={content}
            img={img}
            rightAligned={index % 2 === 0}
          />
        ))}
      </Flex>
    </Flex>
  </Container>
)

export default Features