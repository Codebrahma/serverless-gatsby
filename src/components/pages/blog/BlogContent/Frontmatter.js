import React from 'react'
import {
  Column,
  Text,
  Heading,
  Row,
  Image,
} from 'serverless-design-system/src'
import { BlockLink, LinkWithoutStyle } from 'src/components'
import {
  getCategoryLink,
  getCategoryNameById,
  getAuthorById,
  getAuthorLink,
} from 'src/utils/blog'

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

const Category = ({ id }) => (
  <LinkWithoutStyle to={getCategoryLink(id)}>
    <Text.span
      fontFamily="Serverless"
      fontSize={1}
      opacity={0.4}
    >
      { getCategoryNameById(id) }
    </Text.span>
  </LinkWithoutStyle>
)

export default ({ frontmatter }) => {
  const { category: categoryIds, authors, title } = frontmatter
  const author = getAuthorById(authors[0])

  return (
    <Column
      width={[1, 1, 1, 0.65]}
      mx="auto"
      my={[1, 1, 4]}
      alignItems="center"
    >
      <Column my={25}>
        { (categoryIds || []).map((category) => (<Category id={category} />))}
      </Column>
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
