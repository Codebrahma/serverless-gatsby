import React from 'react'
import {
  Background,
  Column,
  Relative,
  Text,
  Heading,
  P
} from 'serverless-design-system/src'
import { formatDate } from 'src/utils'
import AuthorsData from 'src/pages/blog/generated-authors.json'

export default ({ frontmatter }) => (
  <Background
    height="fullHeight"
    width={1}
    background={`url(${frontmatter.thumbnail})`}
    backgroundSize="cover"
  >
    <Column
      bg="#fc5650e6"
      height="fullHeight"
      width={1}
      justifyContent="center"
    >
      <Relative width={1} px={[2, 2, 5]}>
        <Text.p
          fontFamily="Serverless"
          fontSize={1}
          color="white"
          opacity="0.4"
        >
          { frontmatter.category || 'news' }
          &nbsp;-&nbsp;
          { formatDate(frontmatter.date, 'dd.mm.yy') }
        </Text.p>
        <Heading.h3
          fontFamily="SoleilBk"
          letterSpacing="h4"
          color="white"
          fontSize={[3, 3, 3, 4]}
        >
          { frontmatter.title }
        </Heading.h3>
        <P
          fontSize={[1, 1, 1, 2]}
          lineHeight={1.63}
          color='white'
        >
          { frontmatter.description }
        </P>
        <Text.p
          fontFamily="Soleil"
          fontSize={0}
          color="white"
          opacity="0.5"
          lineHeight={3}
        >
          written by&nbsp;
          { (frontmatter.authors || []).map((id) => AuthorsData[id].name).join(', ') }
        </Text.p>
      </Relative>
    </Column>
  </Background>
)