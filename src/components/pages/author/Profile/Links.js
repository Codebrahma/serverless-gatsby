import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Row,
  Column,
  Image,
  Text
} from 'serverless-design-system/src'
import {
  getLinkName,
  getGithubLink,
  getTwitterLink,
  getMediumLink,
} from 'src/utils/links'

import linkIcon from 'src/assets/images/link.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import githubIcon from 'src/assets/images/github.svg'
import mediumIcon from 'src/assets/images/medium.svg'

const Link = styled.a`
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

const renderLink = (image, link) => (
  <Link href={link} target='_blank'>
    <Row alignItems="center">
      <Column mr={1}>
        <Image
          src={image}
          width={20}
          maxHeight={20}
        />
      </Column>
      <Text.p fontSize={1}>
        { getLinkName(link) }
      </Text.p>
    </Row>
  </Link>
)

export default ({ personalWebsite, githubHandle, twitterHandle, mediumHandle }) => (
  <Box width={[1, 1, 280]}>
    { personalWebsite && renderLink(linkIcon, personalWebsite) }
    { githubHandle && renderLink(githubIcon, getGithubLink(githubHandle)) }
    { twitterHandle && renderLink(twitterIcon, getTwitterLink(twitterHandle)) }
    { mediumHandle && renderLink(mediumIcon, getMediumLink(mediumHandle)) }
  </Box>
)
