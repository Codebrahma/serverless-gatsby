import React from 'react'
import { push } from 'gatsby-link'
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
import AuthorsData from 'src/pages/blog/generated-authors.json'

const Item = ({ theme, id, frontmatter, numSlides, goToSlide, currentSlide }) => {
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
              { frontmatter.category }
            </Text.p>
          </Box>
          <BlockLink to={`/blog/${id}`}>
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
              { frontmatter.description }
            </Text.p>
          </Box>
          <Flex alignItems="center">
            <Text
              fontFamily="Soleil"
              fontSize={0}
              color="gray.3"
              lineHeight={2}
            >
              written by &nbsp;
            </Text>
            <Image
              src={AuthorsData[frontmatter.authors[0]].avatar}
              height={33}
              width={33}
            />
            <Text
              fontFamily="Soleil"
              fontSize={0}
              color="gray.3"
              lineHeight={2}
            >
              &nbsp; { AuthorsData[frontmatter.authors[0]].name }
            </Text>
          </Flex>
        </Flex.verticallyCenter>
      </AppContainer>
    </Box>
  );
}

export default withTheme(Item);
