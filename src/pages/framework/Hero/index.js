import React from 'react';
import styled from 'styled-components';
import {
  Box, Button, Container, Flex, Heading, Image, SecondaryButton, ImageCard, Testimonial, P
} from 'serverless-design-system/src';

import serverlessBolt from '../../../assets/images/serverlessBolt.png';
import frameworkIllustrator from '../../../assets/images/frameworkIllustration.png'

export default () => (
  <Box width={1}>
    <Box bg='black'>
      <Container px={0} py={4} mb="400px" maxWidth="800px">
        <Flex
          height='86px'
          display='flex'
          justifyContent='center'
          my='16px'
        >
          <Image
            src={serverlessBolt}
            maxHeight='67px'
            maxWidth='70px'
          />
        </Flex>
        <Heading.h2
          align='center'
          fontFamily='Serverless'
          color='white'
          lineHeight={0}
          letterSpacing="-1.1px"
          fontSize={5}
          mb={0}
        >
          serverless
        </Heading.h2>
        <Heading.h1 align='center' fontFamily='Serverless' color='white'>
          framework
        </Heading.h1>
        <P
          fontSize={3}
          lineHeight={3}
          color="white"
          align="center"
        >
          The easy, open way to build serverless applications
        </P>
        <P
          fontSize={3}
          lineHeight={3}
          align="center"
          maxWidth="800px"
        >
        The Serverless Framework is an open-source CLI for building and deploying serverless applications. With over 6 million deployments handled, the Serverless Framework is the tool developers trust to build cloud applications.
        </P>
        
        <Flex
          display='flex'
          flexDirection='row'
          width={[1, 1, 3/4]}
          justifyContent='center'
          mx='auto'
          my={4}
        >
          <Button mx={1} minWidth={'280px'} border={0}>quick start</Button>
          <SecondaryButton mx={1} minWidth={'280px'}>login</SecondaryButton>
        </Flex>
    </Container>    
  </Box>
</Box>
);
