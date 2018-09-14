import React from 'react'
import {
  Box,
  Column,
  P,
  Background,
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'

const Description = ({ title, descriptions, imgSrc, imageAlignment }) => (
  <Box width={1}>
    <Background
      background={`url(${imgSrc})`}
      backgroundRepeat="no-repeat"
      backgroundPosition={[`${imageAlignment} top`, `${imageAlignment} top`, imageAlignment]}
      backgroundSize={["120%", "120%", "70%"]}
    >
      <AppContainer>
        <Column
          mt={2}
          alignItems={ imageAlignment === 'right' ? 'flex-start' : 'flex-end' }
        >
          <Box
            width={[1, 1, 0.45]}
            pb={[1, 1, 2, 8, '7vw']}
            pt={['95%', '95%', 2, 8, '7vw']}
          >
            <Box mb={[2, 2, 4, 5]}>
              <TitleWithIcon>
                { title }
              </TitleWithIcon>
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
