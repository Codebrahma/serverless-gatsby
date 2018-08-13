import React from 'react'

import { Box, Container, Flex, P, UseCase } from 'serverless-design-system/src'

const UseCases = ({ useCaseHeader, useCaseSubHeader, cases }) => {
  return (
    <Container px={2}>
      <Flex.horizontallyCenter flexDirection='column'>
        <Box mt={[5, 5, 8]}>
          <P align='center' fontSize={6} color='black' m={1}>
            {useCaseHeader}
          </P>
          <P align='center' fontSize={0}>
            {useCaseSubHeader}
          </P>
        </Box>
        {cases.map(({ title, description, imgSrc }, index) => (
          <UseCase
            key={title}
            title={title}
            description={description}
            imgSrc={imgSrc}
            imageFirst={index % 2 === 1}
          />
        ))}
      </Flex.horizontallyCenter>
    </Container>
  )
}

export default UseCases
