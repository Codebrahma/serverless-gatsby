import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Flex, Image, InlineBlock, Heading } from 'serverless-design-system/src'
import videoIcon from 'src/assets/images/video.png'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const HomeHeroFooter = () => (
  <StyledLink to='/overview-video'>
    <Flex.center
      width={[1, 1, 3 / 4]}
      my={[2, 4, 5]}
      mx={'auto'}
      flexDirection='row'
    >
      <InlineBlock ml={[0, 0, 1]} mr={[0, 0, 2]}>
        <Image
          src={videoIcon}
          height={['40px', '40px', '50px']}
          width='auto'
          maxWidth='none'
        />
      </InlineBlock>
      <Heading.h4
        color='white'
        fontSize={[3, 3, 4]}
        mx={1}
        mb={0}
        lineHeight={[3, 3, 0]}
        align='center'
      >
        watch the video to learn more
      </Heading.h4>
    </Flex.center>
  </StyledLink>
)

export default HomeHeroFooter