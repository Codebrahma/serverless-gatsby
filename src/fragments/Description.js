import React from 'react'
import {
  Box,
  Column,
  Heading,
  P,
  Background,
  TextWithIcon,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'

const Description = ({ title, descriptions, imgSrc, imageAlignment }) => (
  <Box width={1}>
    <Background
      background={`url(${imgSrc})`}
      backgroundRepeat="no-repeat"
      backgroundPosition={[`${imageAlignment} top`, `${imageAlignment} top`, imageAlignment]}
      backgroundSize={["120%", "120%", "75%"]}
    >
      <AppContainer>
        <Column
          mt={[5, 5, 5, 0]}
          alignItems={ imageAlignment === 'right' ? 'flex-start' : 'flex-end' }
        >
          <Box
            width={[1, 1, 0.45]}
            pb={[6, 6, 2, 8, 10]}
            pt={['95%', '95%', 2, 8, 10]}
          >
            <Box mb={5}>
              <TextWithIcon
                iconSrc={redRectangleDots}
                iconHeight='32px'
                iconWidth='70px'
                iconTop='-5px'
                iconLeft='-20px'
              >
                <Heading.h1
                  fontFamily="SoleilBk"
                  lineHeight={0}
                  letterSpacing="h2"
                >
                  { title }
                </Heading.h1>
              </TextWithIcon>
            </Box>
            {
              descriptions.map((description, index) => (
                <P key={`description-${index}`}>{ description }</P>
              ))
            }
          </Box>
        </Column>
      </AppContainer>
    </Background>
  </Box>
)

Description.defaultProps = { imageAlignment: 'right' }

export default Description;
