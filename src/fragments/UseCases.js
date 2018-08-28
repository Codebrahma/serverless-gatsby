import React from 'react'
import { Box, Flex, P, UseCase } from 'serverless-design-system/src'

import { AppContainer } from 'src/components'

const UseCases = ({ useCaseHeader, useCaseSubHeader, cases }) => {
  return (
    <AppContainer>
      <Flex.horizontallyCenter flexDirection='column'>
        <Box mt={[5, 5, 8]} mb={2}>
          <P
            align={['left', 'left', 'center']}
            fontSize={6}
            color='black'
            m={1}
          >
            {useCaseHeader}
          </P>
          <P align='center' fontSize={0}>
            {useCaseSubHeader}
          </P>
        </Box>
        <Box>
          {
            cases.map(({ title, description, imgSrc }, index) => (
              <UseCase
                key={title}
                title={title}
                description={description}
                imgSrc={imgSrc}
                imageFirst={index % 2 === 1}
              />
            ))
          }
        </Box>
      </Flex.horizontallyCenter>
    </AppContainer>
  )
}

export default UseCases
