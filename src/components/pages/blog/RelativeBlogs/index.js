import React from 'react'
import {
  Relative,
  Background,
  ResponsiveStack,
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import BlogCard from './BlogCard'
import glitchDivider from 'src/assets/images/glitch-divider.png'

const CardContainer = ({ children }) => (
  <Relative
    width={[1, 1, 0.49]}
    height={[300, 300, 400]}
    my={1}
  >
    { children }
  </Relative>
)

export default ({ blogs }) => (
  <Relative my={5}>
    <Background
      width={1}
      backgroundImage={['', '', `url(${glitchDivider})`]}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <AppContainer>
        <ResponsiveStack justifyContent="space-between">
          {
            blogs.map(({ id, frontmatter }, index) => (
              <CardContainer key={`relative-${index}`}>
                <BlogCard id={id} frontmatter={frontmatter} />
              </CardContainer>
            ))
          }
        </ResponsiveStack>
      </AppContainer>
    </Background>
  </Relative>
)
