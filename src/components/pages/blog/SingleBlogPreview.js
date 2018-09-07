import React from 'react'
import {
  Background,
  Box,
  Row,
  Text,
  Heading,
  P
} from 'serverless-design-system/src'
import { BlockLink } from 'src/components'
import { getLinkComponent } from 'src/components/BlockLink'
import {
  getAuthorLink,
  getBlogLink,
  getCategoryLink,
  getAuthorInfo,
  getCategoryNameById,
} from 'src/utils/blog'
import { formatDate } from 'src/utils/date'

const HyperLinkBackground = getLinkComponent(Background)

export default ({ id, frontmatter }) => {
  const { title, date, description, category, thumbnail } = frontmatter
  const author = getAuthorInfo({ frontmatter })

  return (
    <Row my={3}>
      <Box
        width={[1, 1, 1, 0.6]}
        pr={[15, 15, 15, '10%']}
      >
        <Text.p
          fontSize={[0, 0, 0, 1]}
          opacity="0.4"
          mt={0}
        >
          <BlockLink to={getCategoryLink(category)}>
            { getCategoryNameById(category) }
          </BlockLink>
          &nbsp;-&nbsp;
          { formatDate(date, 'dd.mm.yy') }
        </Text.p>
        <BlockLink to={getBlogLink(id)}>
          <Heading.h3
            fontSize={[3, 3, 3, 5]}
            fontFamily="SoleilBk"
            letterSpacing="h4"
          >
            { title }
          </Heading.h3>
        </BlockLink>
        <P
          fontSize={[0, 0, 0, 1]}
          lineHeight={1.63}
        >
          { description }
        </P>
        <BlockLink to={getAuthorLink(author.id)}>
          <Text.p
            fontFamily="Soleil"
            fontSize={0}
            color="gray.2"
            lineHeight={3}
          >
            written by&nbsp;
            { author.name }
          </Text.p>
        </BlockLink>
      </Box>

      <Row
        justifyContent="center"
        width={0.4}
        mt={[2, 2, 2, 0]}
      >
        <HyperLinkBackground
          height="auto"
          width={[55, 55, 55, 1]}
          maxHeight={[55, 55, 55, 200]}
          background={`black url(${thumbnail})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          to={getBlogLink(id)}
        />
      </Row>
    </Row>
  )
}