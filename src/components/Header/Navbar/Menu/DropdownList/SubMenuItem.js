import React from 'react';
import { Heading } from 'serverless-design-system/src';

export default ({ children }) => (
  <Heading.h6
    fontSize={'1.76rem'}
    color='#aaaaaa'
  >
    {children}
  </Heading.h6>
);
