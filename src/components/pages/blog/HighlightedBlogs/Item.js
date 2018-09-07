import React from 'react'
import {
  Box,
  Background,
  Flex,
  Heading,
  Text,
  Image
} from 'serverless-design-system/src'
import { AppContainer, BlockLink } from 'src/components'
import { withTheme } from 'styled-components'
import {
  getAuthorInfo,
  getCategoryLink,
  getCategoryNameById,
  getBlogLink,
  getAuthorLink
} from 'src/utils/blog'

const Item = ({ theme, id, frontmatter, numSlides, goToSlide, currentSlide }) => {
  const author = getAuthorInfo({ frontmatter })
  const { category, title, description } = frontmatter

  return (
    <Box width={1}>
      <Background
        width={1}
        height={500}
        background={`url(https://raw.githubusercontent.com/adnanrahic/cdn/master/covers/catridingunicorn2.jpg)`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex.horizontallyCenter
          flexDirection="row"
          height="fullHeight"
          width={1}
          alignItems="flex-end"
          py={45}
        >
          {
            Array.apply(null, { length: numSlides }).map((_, index) => (
              <Box
                height={["12px", "12px", "14px", 15]}
                width={["12px", "12px", "14px", 15]}
                mx={["12px", "12px", "14px", 15]}
                bg={index === currentSlide ? theme.colors.primaryColor : 'white'}
                key={`selector-${index}`}
                onClick={() => goToSlide(index)}
                style={{ cursor: 'pointer' }}
              />
            ))
          }
        </Flex.horizontallyCenter>
      </Background>
      <AppContainer>
        <Flex.verticallyCenter
          flexDirection="column"
          width={[1, 1, 1, 0.65]}
          m="auto"
        >
          <BlockLink to={getCategoryLink(category)}>
            <Box
              width={1}
              pt={3}
              pb={1}
            >
              <Text.p
                fontSize={1}
                opacity={0.4}
                lineHeight={1}
                letterSpacing="text"
                align="center"
              >
                { getCategoryNameById(category) }
              </Text.p>
            </Box>
          </BlockLink>
          <BlockLink to={getBlogLink(id)}>
            <Heading.h2
              fontFamily="SoleilBk"
              fontSize={[4, 4, 5, 7]}
              align="center"
              lineHeight={0}
            >
              { frontmatter.title }
            </Heading.h2>
          </BlockLink>
          <Box
            width={[1, 1, 1, 0.9]}
            px={[0, 0, 0, 4]}
          >
            <Text.p
              fontFamily="SoleilBk"
              color="gray.3"
              lineHeight={1.63}
              mt={[0, 0, 10, 15]}
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
                color="gray.3"
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
                color="gray.3"
                lineHeight={2}
              >
                &nbsp; {author.name}
              </Text>
            </Flex.center>
          </BlockLink>
        </Flex.verticallyCenter>
      </AppContainer>
    </Box>
  );
}

export default withTheme(Item);
