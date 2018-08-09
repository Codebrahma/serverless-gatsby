import React from 'react';

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  P,
} from 'serverless-design-system/src';

import Img from "gatsby-image";

const UseCase = ({ title, description, imgSrc, evenIndex }) => {
  const headerPadding = {
    [ evenIndex ? 'pl' : 'pr' ] : [ 0, 0, '55px', '110px' ]
  };

  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      py={[0, 0, 4]}
    >
      <Flex.horizontallyCenter
        flexDirection="column"
        width={[1, 1, 5/10]}
        mb={2}
        order={evenIndex ? [2, 2, 2] : [2, 2, 1]}
        { ...headerPadding }
      >
        <Heading.h3 fontFamily="SoleilBk">
          {title}
        </Heading.h3>
        <P>
          {description}
        </P>
      </Flex.horizontallyCenter>
      <Flex.horizontallyCenter
        width={[1, 1, 5/10]}
        mb={2}
        px="10%"
        flexDirection="column"
        order={evenIndex ? [1, 1, 1] : [1, 1, 2]}
      >
        <Img
          title={title}
          alt={title}
          sizes={imgSrc.sizes}
        />
      </Flex.horizontallyCenter>
    </Flex>
  );
}

const UseCases = ({ useCaseHeader, useCaseSubHeader, cases }) => {
  return (
    <Container px={2}>
      <Flex.horizontallyCenter flexDirection="column">
        <Box mt={[5, 5, 8]}>
          <P
            align="center"
            fontSize={6}
            color="black"
            m={1}
          >
            {useCaseHeader}
          </P>
          <P
            align="center"
            fontSize={0}
          >
            {useCaseSubHeader}
          </P>
        </Box>
        {
          cases.map(({ title, description, imgSrc }, index) => (
            <UseCase
              key={title}
              evenIndex={index % 2 === 1}
              title={title}
              description={description}
              imgSrc={imgSrc}
            />
          ))
        }
      </Flex.horizontallyCenter>
    </Container>
  );
}

export default UseCases;