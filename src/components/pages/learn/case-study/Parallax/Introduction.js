import React from 'react'

import { Flex, Box, Image, P, Text } from 'serverless-design-system/src'
import parallaxLogo from 'src/assets/images/parallax-logo.svg'

const Introduction = () => (
  <Flex flexDirection={['column', 'column', 'row']} mt={[5, 5, 8]}>
    <Box width={[1, 1, 3/10]}>
      <Image
        src={parallaxLogo}
        height="41px"
        width="auto"
      />
      <Box mt={[2, 2, 3, 4]}>
        <Text.span
          fontSize={1}
          lineHeight={1}
          letterSpacing="text"
        >
          Visit parall.ax
        </Text.span>
      </Box>
    </Box>
    <Box width={[1, 1, 7/10]}>
      <P>
        Parallax, a UK-based digital marketing agency, was tasked with building out a web app for fans to engage with David Guetta's new release - This One's For You - the official anthem of the Union of European Football Associations (UEFA) 2016 European Championship finals.
      </P>
      <P>
        A huge part of the marketing campaign surrounding David Guetta's track "This One's For You" revolved around fans collaborating on the song's actual production. As the focal point of the official anthem of the UEFA EURO 2016 finals the app was sure to receive a lot of traffic and building a high-quality, engaging experience was of the upmost importance. The UEFA, in conjunction with sports group Perform, tasked PArallax with building a simple, intutive web app tht clearly explains the premise, allows high fidelity voice recording and generates shareable content.
      </P>
    </Box>
  </Flex>
)

export default Introduction