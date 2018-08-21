// TODO
// Identify how to include hard coded values in theme
// Negative pixel for icon top - possible to include in theme
// Make image load faster

import React from 'react'
import { Background, Box, Flex } from 'serverless-design-system/src'

import FooterIcon from './FooterIcon'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

import glitchEffect from '../../assets/images/glitchEffect.png'

// Self contained Root Renderer for footer
const FooterWrapper = ({ prefooter }) => (
  <Flex.column>
    <Background
      height={75}
      backgroundImage={`url(${glitchEffect})`}
    />
    <Background background='black'>
      <Box pt={[0, 0, 7]} pb={7}>
        <Flex.row m='auto' flexWrap='wrap' maxWidth={1}>
          <Box width={1} px={[0, 0, 2]}>
            {prefooter ? prefooter() : null}
            <FooterIcon />
          </Box>

          <Flex width={1} px={2} flexWrap='wrap'>
            <LeftSection />
            <RightSection />
          </Flex>
        </Flex.row>
      </Box>
    </Background>
  </Flex.column>
)

export default FooterWrapper
