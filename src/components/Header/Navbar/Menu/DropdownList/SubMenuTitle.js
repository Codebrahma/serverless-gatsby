import React from 'react';
import {
  Heading,
  TextWithIcon
} from 'serverless-design-system/src';

export default ({ children }) => (
  <TextWithIcon
    iconSrc={'https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png'}
    iconHeight="20px"
    iconWidth="25px"
    iconTop="-2px"
    iconLeft="-10px"
  >
    <Heading.h5
      m={0}
      p={0}
      color={'white'}
      fontSize={'1.9rem'}
      letterSpacing={'0.6px'}
    >
      {children}
    </Heading.h5>
  </TextWithIcon>
)
