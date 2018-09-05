import React from 'react'
import { Background, Box, Row, Text, Heading, P } from 'serverless-design-system/src'
import { push } from 'gatsby-link'
import { formatDate } from 'src/utils'
import AuthorsData from 'src/pages/blog/generated-authors.json'

export default ({ id, frontmatter }) => (
  <Row
    my={3}
    style={{ cursor: 'pointer' }}
    onClick={() => push(`/blog/${id}`)}
  >
    <Box
      width={[1, 1, 1, 0.6]}
      pr={[15, 15, 15, '10%']}
    >
      <Text.p
        fontFamily="Serverless"
        fontSize={[0, 0, 0, 1]}
        opacity="0.4"
        mt={0}
      >
        { frontmatter.category || 'news' }
        &nbsp;-&nbsp;
        { formatDate(frontmatter.date, 'dd.mm.yy') }
      </Text.p>
      <Heading.h3
        fontSize={[3, 3, 3, 5]}
        fontFamily="SoleilBk"
        letterSpacing="h4"
      >
        { frontmatter.title }
      </Heading.h3>
      <P
        fontSize={[0, 0, 0, 1]}
        lineHeight={1.63}
      >
        { frontmatter.description }
      </P>
      <Text.p
        fontFamily="Soleil"
        fontSize={0}
        color="gray.2"
        lineHeight={3}
      >
        written by&nbsp;
        { (frontmatter.authors || []).map((id) => AuthorsData[id].name).join(', ') }
      </Text.p>
    </Box>
    <Row
      justifyContent="center"
      width={0.4}
      mt={[2, 2, 2, 0]}
    >
      <Background
        height={[55, 55, 55, 200]}
        width={[55, 55, 55, 1]}
        background={`black url(${frontmatter.thumbnail})`}
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
    </Row>
  </Row>
)
