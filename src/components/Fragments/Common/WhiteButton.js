import React from 'react';
import { SecondaryButton } from 'serverless-design-system/src';

export default ({ children }) => (
  <SecondaryButton
    width="280px"
    borderWidth="2.5px"
    color="white"
    px='2.5rem'
    theme={{ colors: { primaryColor: '#ffffff', secondaryColor: '#ffffff' } }}
  >
    { children }
  </SecondaryButton>
);
