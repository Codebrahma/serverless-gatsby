import React from 'react';

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  P,
  ResponsiveStack
} from 'serverless-design-system/src';

const UseCase = ({ title, description, imgSrc, evenIndex }) => {
  const headerPadding = {
    [ evenIndex ? 'pl' : 'pr' ] : [ 0, 0, '55px', '110px' ]
  };

  return (
    <ResponsiveStack py={[0, 0, 4]}>
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
        order={evenIndex ? [1, 1, 1] : [1, 1, 2]}
      >
        <Image
          src={imgSrc}
          alt={title}
          maxWidth={1}
          width={[ '100%', '80%', '60%', '80%' ]}
          my="auto"
        />
      </Flex.horizontallyCenter>
    </ResponsiveStack>
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