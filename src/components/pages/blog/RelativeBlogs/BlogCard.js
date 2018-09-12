import React from 'react'
import styled from 'styled-components'
import {
  Background,
  Column,
  Relative,
  Text,
  Heading,
  P
} from 'serverless-design-system/src'
import { getLinkComponent } from 'src/components/BlockLink'
import { getAuthorInfo, getBlogLink } from 'src/utils/blog'
import { formatDate } from 'src/utils/date'

const HoverableColumn = styled(Column)`
  background-color: #fc5650e6;
  &:hover {
    background-color: #b73833e6;
  }
`

const BackgroundWithLink = getLinkComponent(Background);

export default ({ id, frontmatter }) => (
  <BackgroundWithLink
    to={getBlogLink(id)}
    height="fullHeight"
    width={1}
    background={`url(${frontmatter.thumbnail})`}
    backgroundSize="cover"
  >
    <HoverableColumn
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
          { getAuthorInfo({ frontmatter }).name }
        </Text.p>
      </Relative>
    </HoverableColumn>
  </BackgroundWithLink>
)
