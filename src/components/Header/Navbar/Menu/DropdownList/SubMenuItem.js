import React from 'react';
import { Heading } from 'serverless-design-system/src';
import NavLink from '../../../../Fragments/Common/NavLink';

export default ({ children, navProps }) => (
  <NavLink {...navProps}>
    <Heading.h6 fontSize={'1.76rem'}>
      {children}
    </Heading.h6>
  </NavLink>
);
