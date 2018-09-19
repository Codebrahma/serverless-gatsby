import React from 'react'
import {
  Absolute,
  Box,
  Background,
  Flex,
  Heading,
  Text,
  Image,
  Row,
  Column,
} from 'serverless-design-system/src'
import { getLinkComponent } from 'src/components/BlockLink'
import { AppContainer, BlockLink } from 'src/components'
import { withTheme } from 'styled-components'
import {
  getAuthorInfo,
  getBlogLink,
  getAuthorLink
} from 'src/utils/blog'
import Categories from '../Categories'

const LinkImage = getLinkComponent(Image)

const Item = ({ id, frontmatter }) => {
  const author = getAuthorInfo({ frontmatter })
  const authorURL = getAuthorLink(author.id)
  const { title, category: categoryIds, description, heroImage } = frontmatter

  return (
      <Background
        width={1}
        height="fullHeight"
        background={`black url(${heroImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Absolute
          height="fullHeight"
          width={1}
          bg="black"
          zIndex={1}
          style={{ opacity: 0.5 }}
        />
        <Absolute
          width={1}
          zIndex={2}
        >
          <AppContainer>
            <Flex.verticallyCenter
              flexDirection="column"
              width={[1, 1, 1, 0.65]}
              m="auto"
              pt={4}
            >
              <Categories
                categoryIds={categoryIds}
                textStyleProps={{ color: 'white', opacity: 0.5 }}
              />
              <BlockLink to={getBlogLink(id)}>
                <Heading.h2
                  fontFamily="SoleilBk"
                  fontSize={[4, 4, 5, 7]}
                  align="center"
                  lineHeight={[3, 3, 2, 1]}
                  color="white"
                >
                  { title }
                </Heading.h2>
              </BlockLink>
              <Box
                width={[1, 1, 1, 0.9]}
                px={[0, 0, 0, 4]}
              >
                <Text.p
                  fontFamily="SoleilBk"
                  color="white"
                  lineHeight={1.63}
                  mt={[0, 0, 1, 15]}
                  align="center"
                >
                  { description }
                </Text.p>
              </Box>

              <Row width={1}>
                <Column
                  width={1}
                  alignItems="flex-end"
                  justifyContent="center"
                >
                  <BlockLink to={authorURL}>
                    <Text
                      fontFamily="Soleil"
                      fontSize={0}
                      color="white"
                      lineHeight={2}
                    >
                      written by &nbsp;
                    </Text>
                  </BlockLink>
                </Column>

                <LinkImage
                  src={author.avatar}
                  height={33}
                  width={33}
                  to={authorURL}
                />

                <Column
                  width={1}
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <BlockLink to={authorURL}>
                    <Text
                      fontFamily="Soleil"
                      fontSize={0}
                      color="white"
                      lineHeight={2}
                    >
                      &nbsp; {author.name}
                    </Text>
                  </BlockLink>
                </Column>
              </Row>
            </Flex.verticallyCenter>
          </AppContainer>
        </Absolute>
      </Background>
  );
}

export default withTheme(Item);
