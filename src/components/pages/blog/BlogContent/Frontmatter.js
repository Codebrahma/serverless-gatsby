import React from 'react'
import {
  Column,
  Text,
  Heading,
  Row,
  Image,
} from 'serverless-design-system/src'
import { BlockLink } from 'src/components'
import { getAuthorById, getAuthorLink } from 'src/utils/blog'
import Categories from '../Categories'

const WrittenByText = ({ children }) => (
  <Text
    fontFamily="Soleil"
    fontSize={0}
    color="gray.3"
    lineHeight={2}
  >
    { children }
  </Text>
)

export default ({ frontmatter }) => {
  const { category: categoryIds, authors, title } = frontmatter
  const author = getAuthorById((authors || [])[0])

  return (
    <Column
      width={[1, 1, 1, 0.65]}
      mx="auto"
      mt={[1, 1, 4]}
      mb={[1, 1, 2]}
      alignItems="center"
    >
      <Categories categoryIds={categoryIds} />
      <Heading.h1
        fontSize={[4, 4, 4, 7]}
        fontFamily="SoleilBk"
        letterSpacing="h4"
        align="center"
      >
        { title }
      </Heading.h1>
      <BlockLink to={getAuthorLink(author.id)}>
        <Row
          alignItems="center"
          my={15}
        >
          <WrittenByText>
            written by &nbsp;
          </WrittenByText>
          <Image
            src={ author.avatar }
            height={33}
            width={33}
          />
          <WrittenByText>
            &nbsp; { author.name }
          </WrittenByText>
        </Row>
      </BlockLink>
    </Column>
  )
}
