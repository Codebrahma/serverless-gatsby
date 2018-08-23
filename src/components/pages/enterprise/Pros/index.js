import React from 'react'

import { Box } from 'serverless-design-system/src'

import Description from './Description'
import Pros from './data'
import SubTitle from './SubTitle';
import Title from './Title'

const Advantage = ({ title, description }) => (
  <Box my={4}>
    <SubTitle>{ title }</SubTitle>
    <Description>{ description }</Description>
  </Box>
);

export default () => (
  <Box>
    <Title>
      Move fast, safely
    </Title>
    <Description>
      The Serverless Enterprise Platform gives you everything you need to operationalize Serverless development.
    </Description>

    { Pros.map((item, index) => (<Advantage {...item} key={index} />)) }
  </Box>
);
