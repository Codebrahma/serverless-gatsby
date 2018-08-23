import React from 'react';
import { DropDown } from 'serverless-design-system/src';

const optionProps = {
  background: 'rgba(39, 39, 39, .05)',
  border: 'none',
  color: '#8c8c8c',
};

export default (props) => (
  <DropDown
    fieldContainerProps={optionProps}
    placeholderProps={{ color: '#8c8c8c' }}
    menuContainerProps={{
      borderLeft: 'none',
      borderRight: 'none',
    }}
    optionProps={optionProps}
    {...props}
  />
);
