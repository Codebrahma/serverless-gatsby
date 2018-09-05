import React from 'react'
import { Box, Flex, Row, Column, Image, Text, P, Heading, ResponsiveStack } from 'serverless-design-system/src'
import BlogLayout from 'src/layouts/Blog'
import { AppContainer } from 'src/components'
import BlogPreview from 'src/components/pages/blog/Preview'
import BlogListPrefooter from 'src/components/pages/blog/ListPrefooter'
import { Divider, TitleWithIcon } from 'src/fragments'
import AuthorsData from 'src/pages/blog/generated-authors.json'

import linkIcon from 'src/assets/images/link.svg'
import twitterIcon from 'src/assets/images/twitter.svg'
import githubIcon from 'src/assets/images/github.svg'
import mediumIcon from 'src/assets/images/medium.svg'

export default class Authors extends React.Component {
  render() {
    const { data, pathContext: { authorId } } = this.props
    const edges = data.allBlog ? (data.allBlog.edges || []) : []
    const author = AuthorsData[authorId]

    return (
      <BlogLayout prefooter={BlogListPrefooter}>
        <AppContainer>
          <ResponsiveStack mt={[2, 2, 5]}>
            <Column
              width={[1, 1, 0.4]}
              alignItems={["center", "center", "flex-end"]}
              my={2}
            >
              <Box>
                <Image
                  height={["auto", "auto", 280]}
                  width={[1, 1, 280]}
                  src={(author.avatar || "").replace("140", "280")}
                />
                <Box height="10px" />
                <Row alignItems="center">
                  <Column mr={1}>
                    <Image src={linkIcon} width="20px" maxHeight="24px" />
                  </Column>
                  <Text.p my={1}>
                    adnanrahic.github.io
                  </Text.p>
                </Row>

                <Row alignItems="center">
                  <Column mr={1}>
                    <Image src={twitterIcon} width="20px" maxHeight="24px" />
                  </Column>
                  <Text.p my={1}>
                    twitter.com/adnanrahic
                  </Text.p>
                </Row>

                <Row alignItems="center">
                  <Column mr={1}>
                    <Image src={githubIcon} width="20px" maxHeight="24px" />
                  </Column>
                  <Text.p my={1}>
                    github.com/adnanrahic
                  </Text.p>
                </Row>

                <Row alignItems="center">
                  <Column mr={1}>
                    <Image src={mediumIcon} width="20px" maxHeight="24px" />
                  </Column>
                  <Text.p my={1}>
                    medium.com/@adnanrahic
                  </Text.p>
                </Row>
              </Box>
            </Column>
            <Column
              width={[1, 1, 0.6]}
              alignItems="center"
              my={2}
            >
              <Box width={[1, 1, 0.7]}>
                <TitleWithIcon>
                  {author.name}
                </TitleWithIcon>
                <P>
                  Currently working as a software engineer at a booming start-up based out of Sarajevo called @bookvar_co. Hell bent on creating the most beautiful online learning platform ever.
                </P>
                <P>
                  I found that my passion is teaching. After my full-time job I teach JavaScript and MySQL at the @ACADEMY387. A premium IT educational facility in Sarajevo.
                </P>
                <P>
                  In my free time I volounteer as a campsite leader in my local @freeCodeCamp community. This is my way of giving back.
                </P>
                <P>
                  I'm a passionate reader, down to earth writer, active daily on Medium. Writer for Hacker Noon and WeAreDevelopers Magazine.
                </P>
                <P>
                  JavaScript is my language of choice. I've been creating full stack JavaScript software for over a year. Loving the MEAN Stack, even though I'm a hardcore SQL enthusiast. The most life changing event in my life was getting introduced to Nodejs, and of course reading "Eloquent JavaScript" from cover to cover.
                </P>
              </Box>
            </Column>
          </ResponsiveStack>
        </AppContainer>
        <Divider visibleInSmallScreens />
        <Flex.center py={2}>
          <Heading.h2
            fontSize={[4, 4, 6]}
            fontFamily="SoleilSb"
            align="center"
            lineHeight={1.4}
            letterSpacing="0"
          >
            Posts from {author.name.split(" ")[0]}
          </Heading.h2>
        </Flex.center>
        <BlogPreview blogs={edges.map(({ node }) => node)} />
      </BlogLayout>
    )
  }
}

export const query = graphql`
  query AuthorsBlogs($authorId: [String]) {
    allBlog (filter: { frontmatter: { authors: {  in: $authorId } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            authors
            thumbnail
            category
            featured
          }
        }
      }
      totalCount
    }
  }
`
