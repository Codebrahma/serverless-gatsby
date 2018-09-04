import React from 'react'
import { Background, Box, Row, Text, Heading, P } from 'serverless-design-system/src'
import { formatDate } from 'src/utils'
import AuthorsData from 'src/pages/blog/generated-authors.json'

export default ({ id, frontmatter }) => (
  <Row my={3}>
    <Box
      width={[1, 1, 1, 0.6]}
      pr={[0, 0, 0, '10%']}
    >
      <Text.p
        fontFamily="Serverless"
        fontSize={1}
        opacity="0.4"
      >
        { frontmatter.category || 'news' }
        &nbsp;-&nbsp;
        { formatDate(frontmatter.date, 'dd.mm.yy') }
      </Text.p>
      <Heading.h3
        fontFamily="SoleilBk"
        letterSpacing="h4"
      >
        { frontmatter.title }
      </Heading.h3>
      <P lineHeight={1.63}>
        { frontmatter.description }
      </P>
      <Text.p
        fontFamily="Soleil"
        fontSize={0}
        color="gray.2"
        lineHeight={3}
      >
        written by&nbsp;
        { frontmatter.authors.map((id) => AuthorsData[id].name).join(', ') }
      </Text.p>
    </Box>
    <Box width={0.4}>
      <Background
        height={200}
        width={1}
        background={`url(${frontmatter.thumbnail})`}
        backgroundSize="cover"
        backgroundPosition="center"
      />
    </Box>
  </Row>
)
