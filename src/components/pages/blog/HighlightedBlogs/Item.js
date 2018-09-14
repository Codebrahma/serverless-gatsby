import React from 'react'
import {
  Box,
  Background,
  Flex,
  Heading,
  Text,
  Image,
} from 'serverless-design-system/src'
import { AppContainer, BlockLink } from 'src/components'
import { withTheme } from 'styled-components'
import {
  getAuthorInfo,
  getBlogLink,
  getAuthorLink
} from 'src/utils/blog'
import Categories from '../Categories'

const Item = ({ id, frontmatter, numSlides, goToSlide, currentSlide }) => {
  const author = getAuthorInfo({ frontmatter })
  const { title, category: categoryIds, description, heroImage } = frontmatter

  return (
      <Background
        width={1}
        height="fullHeight"
        background={`black url(${heroImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <AppContainer>
          <Flex.verticallyCenter
            flexDirection="column"
            width={[1, 1, 1, 0.65]}
            m="auto"
            pt={4}
          >
            <Categories categoryIds={categoryIds} />
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

            <BlockLink to={getAuthorLink(author.id)}>
              <Flex.center>
                <Text
                  fontFamily="Soleil"
                  fontSize={0}
                  color="white"
                  lineHeight={2}
                >
                  written by &nbsp;
                </Text>
                <Image
                  src={author.avatar}
                  height={33}
                  width={33}
                />
                <Text
                  fontFamily="Soleil"
                  fontSize={0}
                  color="white"
                  lineHeight={2}
                >
                  &nbsp; {author.name}
                </Text>
              </Flex.center>
            </BlockLink>
          </Flex.verticallyCenter>
        </AppContainer>
      </Background>
  );
}

export default withTheme(Item);
