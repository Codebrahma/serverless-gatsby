import React from 'react'

import { Flex, Box, P } from 'serverless-design-system/src'

const Introduction = () => (
  <Flex flexDirection={['column', 'column', 'row']} mt={10} px={[4, 4, 0]}>
    <Box width={[1, 1, 3/10]}>
      <P>PARALLAX</P>
      <P>Visit parall.ax</P>
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