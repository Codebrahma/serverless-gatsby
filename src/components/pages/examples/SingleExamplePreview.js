import React from 'react'
import styled from 'styled-components'
import {
  Background,
  Box,
  Row,
  Text,
  Heading,
  P,
  Card
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


const HoverableColumn = styled(Card)`
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 2px 10px 24px 0 rgba(0, 0, 0, 0.08);
  }
`

export default ({ id, frontmatter }) => {
  const { title, date, description, category, thumbnail, platform } = frontmatter
  const author = getAuthorInfo({ frontmatter })

  return (
    <Box 
      width={[1, 1, 1, 1/3]}
      p={[1, 1, 1, 2]}
      mb={[1, 1, 1, 4]}
    >
      <HoverableColumn>
       <Box m="36px 48px">
        <BlockLink to={getBlogLink(id)}>
          <Box>
            <Heading.h3
              fontSize={[3, 3, 3, 4]}
              fontFamily="SoleilBk"
              letterSpacing="h4"
            >
              { title }
            </Heading.h3>
          </Box>
        </BlockLink>
        <P
          fontSize={[0, 0, 0, 2]}
          lineHeight={1.63}
        >
          { description }
        </P>
        </Box>
      </HoverableColumn>
    </Box>
  )
}