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
      backgroundSize={["120%", "120%", "75%"]}
    >
      <AppContainer>
        <Column
          mt={[5, 5, 5, 2]}
          alignItems={ imageAlignment === 'right' ? 'flex-start' : 'flex-end' }
        >
          <Box
            width={[1, 1, 0.45]}
            pb={[6, 6, 2, 8, '10vw']}
            pt={['95%', '95%', 2, 8, '10vw']}
          >
            <Box mb={5}>
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
