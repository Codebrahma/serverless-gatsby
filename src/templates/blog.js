import React from 'react'
import Helmet from 'react-helmet'
import {
  Text,
  Heading,
  Column,
  Row,
  ResponsiveStack,
  Image,
  Relative,
  Absolute,
  Background,
  P,
} from 'serverless-design-system/src'
import { push } from 'gatsby-link'
import BlogLayout from 'src/layouts/Blog'
import { AppContainer } from 'src/components'
import ContentWrapper from 'src/components/pages/blog/ContentWrapper'
import Card from 'src/components/pages/blog/Card'
import Prefooter from 'src/components/pages/blog/Prefooter'
import DisqusScript from 'src/components/pages/blog/DisqusScript'
import AuthorsData from 'src/pages/blog/generated-authors.json'
import CategoryData from 'src/pages/blog/generated-categories.json'
import dotGridHorizontal from 'src/assets/images/dot-grid-horizontal.png'
import glitchDivider from 'src/assets/images/glitch-divider.png'

export default ({ data: { blog: { id, frontmatter, content } } }) => {
  const author = AuthorsData[(frontmatter.authors || [])[0]];

  return (
    <BlogLayout prefooter={Prefooter}>
      <AppContainer>
        <Column
          width={[1, 1, 1, 0.65]}
          mx="auto"
          my={[1, 1, 4]}
          alignItems="center"
        >
          <Text.p
            fontFamily="Serverless"
            fontSize={1}
            opacity="0.4"
            my={25}
          >
            { CategoryData[frontmatter.category] || 'news' }
          </Text.p>
          <Heading.h1
            fontSize={[4, 4, 4, 7]}
            fontFamily="SoleilBk"
            letterSpacing="h4"
            align="center"
          >
            { frontmatter.title }
          </Heading.h1>
          <Row
            alignItems="center"
            my={15}
          >
            <Text
              fontFamily="Soleil"
              fontSize={0}
              color="gray.3"
              lineHeight={2}
            >
              written by &nbsp;
            </Text>
            <Image
              src={author ? author.avatar : null}
              height={33}
              width={33}
            />
            <Text
              fontFamily="Soleil"
              fontSize={0}
              color="gray.3"
              lineHeight={2}
            >
              &nbsp; { author ? author.name : null }
            </Text>
          </Row>
        </Column>
        <ContentWrapper
          width={[1, 1, 1, 0.65]}
          mx="auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Row
          width={[1, 1, 1, 0.65]}
          mx="auto"
          mt={4}
          style={{ cursor: 'pointer' }}
          onClick={() => push(`/author/${frontmatter.authors ? frontmatter.authors[0] : null }`)}
        >
          <Relative zIndex={-2}>
            <Image
              src={author ? author.avatar : null}
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
              top="14%"
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
              About {author ? author.name : null}
            </Heading.h4>
            <P
              fontFamily="SoleilBk"
              fontSize={[0, 0, 0, 1]}
            >
              {author ? author.bio.long : null}
            </P>
          </Relative>
        </Row>
      </AppContainer>
      <Relative my={5}>
        <Background
          width={1}
          background={`url(${glitchDivider})`}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        >
          <AppContainer>
            <ResponsiveStack
              justifyContent={["space-between"]}
            >
              <Relative
                width={[1, 1, 0.49]}
                height={[300, 300, 400]}
                my={1}
              >
                <Card frontmatter={frontmatter} />
              </Relative>
              <Relative
                width={[1, 1, 0.49]}
                height={[300, 300, 400]}
                my={1}
              >
                <Card frontmatter={frontmatter} />
              </Relative>
            </ResponsiveStack>
          </AppContainer>
        </Background>
      </Relative>
      <Column
        width={[1, 1, 1, 0.65]}
        px={2}
        mx="auto"
        id="disqus_thread"
      >
      </Column>
      <Helmet script={[{ type: 'text/javascript', innerHTML: DisqusScript }]} />
    </BlogLayout>
  );
};

export const query = graphql`
  query BlogDetails($blogId: String!) {
    blog(id: { eq: $blogId }) {
      id
      frontmatter {
        title
        date,
        description
        authors
        thumbnail
        gitLink
        category
      }
      content
    }
  }
`
