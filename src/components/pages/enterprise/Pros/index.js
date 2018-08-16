import React from 'react'

import {
  Box,
  Heading,
  TextWithIcon,
} from 'serverless-design-system/src'

import Advantage from './Advantage'
import Description from './Description'
import Pros from './data';
import dotGridBackground from 'src/assets/images/dot-grid.png'

export default () => (
  <Box>
    <TextWithIcon
      iconSrc={dotGridBackground}
      iconHeight='35px'
      iconWidth='60px'
      iconTop='-8px'
      iconLeft='-12px'
    >
      <Heading.h1
        fontFamily="SoleilBk"
        fontWeight="normal"
        lineHeight={0}
        letterSpacing={'h2'}
      >
        Move fast, safely
      </Heading.h1>
    </TextWithIcon>

    <Description>
      The Serverless Enterprise Platform gives you everything you need to operationalize Serverless development.
    </Description>

    { Pros.map((item, index) => (<Advantage {...item} key={index} />)) }
  </Box>
);
