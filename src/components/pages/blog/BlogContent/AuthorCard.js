import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'
import {
  Row,
  Relative,
  Image,
  Absolute,
  Background,
  Heading,
  P,
} from 'serverless-design-system/src'
import { getAuthorLink } from 'src/utils/blog'
import dotGridHorizontal from 'src/assets/images/dot-grid-horizontal.png'

const PointableRow = styled(Row)`
  cursor: pointer;
`

export default ({ author }) => (
  <PointableRow
    width={[1, 1, 1, 0.65]}
    mx="auto"
    pt={[4, 4, 5, 6]}
    onClick={() => push(getAuthorLink(author.id))}
  >
    <Relative zIndex={-2}>
      <Image
        src={(author.avatar || '').replace("140", "280")}
        height={['auto', 'auto', 'auto', 177]}
        width={[55, 55, 55, 177]}
        objectFit="contain"
      />
    </Relative>
    <Relative
      width={[1, 1, 1, 0.6]}
      ml={[15, 15, 15, 2]}
    >
      <Absolute
        height={[0, 0, 0, 38]}
        width={98}
        top="12%"
        left="-12%"
        zIndex={-1}
      >
        <Background
          height="fullHeight"
          width={1}
          background={`url(${dotGridHorizontal})`}
          backgroundSize="cover"
        />
      </Absolute>
      <Heading.h4
        mt={[0, 0, 0, 3]}
        fontFamily="SoleilBk"
        fontSize={[3, 3, 3, 4]}
      >
        About { author.name }
      </Heading.h4>
      <P
        fontFamily="SoleilBk"
        fontSize={[0, 0, 0, 1]}
      >
        { author.bio ? author.bio.short : null }
      </P>
    </Relative>
  </PointableRow>
)
