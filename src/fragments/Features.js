import React from 'react'

import {
  Box,
  Column,
  Container,
  Feature as FeatureItem,
  Heading,
  Row,
  Text,
} from 'serverless-design-system/src'

const Features = ({ title, description, features, leadingNumber }) => (
  <Container>
    <Box px={2}>
      <Column px={[0, 0, 2, 5]} mt={5}>
        <Box my={4}>
          <Heading.h2
            align="center"
            fontFamily="SoleilSb"
            lineHeight="1.4"
            my={1}
          >
            {title}
          </Heading.h2>
          {
            description && (
              <Text.p
                align="center"
                fontFamily="Soleil"
                fontSize={1}
                lineHeight={3}
                color="gray.2"
              >
                { description }
              </Text.p>
            )
          }
        </Box>
        <Row flexWrap='wrap' mt={3}>
          {features.map(({ header, img, content }, index) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              img={img}
              rightAligned={index % 2 === 0}
              leadingNumber={leadingNumber}
            />
          ))}
        </Row>
      </Column>
    </Box>
  </Container>
)

Features.defaultProps = {
  title: 'Features',
  description: null,
  leadingNumber: true,
}

export default Features