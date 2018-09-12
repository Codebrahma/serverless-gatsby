import React from 'react'
import { Row, Text } from 'serverless-design-system/src'
import { LinkWithoutStyle } from 'src/components'
import {
  getCategoryLink,
  getCategoryNameById,
} from 'src/utils/blog'

const CategoryDetail = ({ id, renderComma }) => (
  <React.Fragment>
    <Text.span
      fontFamily="Serverless"
      fontSize={1}
      opacity={0.4}
    >
      <LinkWithoutStyle to={getCategoryLink(id)}>
        { getCategoryNameById(id) }
      </LinkWithoutStyle>
      { renderComma ? (<React.Fragment>,&nbsp;</React.Fragment>) : '' }
    </Text.span>
  </React.Fragment>
)

export default ({ categoryIds }) => (
  <Row my={25}>
    {
      categoryIds.map((id, index) => (
        <CategoryDetail
          key={id}
          id={id}
          renderComma={index !== categoryIds.length-1}
        />
      ))
    }
  </Row>
)
