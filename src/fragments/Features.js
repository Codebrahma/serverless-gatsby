import React from 'react'
import {
  Box,
  Column,
  Feature as FeatureItem,
  Heading,
  Row,
  Text,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'

const Features = ({ title, description, features, leadingNumber }) => (
  <AppContainer>
    <Column px={[0, 0, 0, 45]}>
      <Box my={[0, 0, 0, 4]}>
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
        {
          features.map(({ header, img, content, action }, index) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              action={action}
              img={img}
              rightAligned={index % 2 === 0}
              leadingNumber={leadingNumber}
            />
          ))
        }
      </Row>
    </Column>
  </AppContainer>
)

Features.defaultProps = {
  title: 'Features',
  description: null,
  leadingNumber: true,
}

export default Features