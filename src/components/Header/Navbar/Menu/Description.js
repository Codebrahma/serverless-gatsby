// TODO: MAKE THIS CLASS READABLE
import React from 'react'

import { withTheme } from 'styled-components';
import { Box, withBeforeAfter } from 'serverless-design-system/src'
import NavbarContext from './../../NavbarContext'

// TODO: remove hardcoded color
const MenuWrapper = withBeforeAfter(
  Box,
  `&`,
  `
    content: ' ';
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: -10px;
    margin-left: -7.5px;
    border-style: solid;
    border-color: transparent transparent #090915 transparent;
  `,
  ``
)

const MenuDescription = ({ wrapperStyles, theme, children }) => (
  <NavbarContext.Consumer>
    {({ isNavbarShrinked }) => (
      <MenuWrapper
        px={[1, 1, 4]}
        pt={[1, 1, 3]}
        pb={4}
        zIndex='999'
        boxShadow='0 10px 50px 0 rgba(0, 0, 0, 0.15)'
        position={['relative', 'relative', 'absolute']}
        top={['0', '0', isNavbarShrinked ? '72px' : '90px']}
        left={['0', '0', '-50%']}
        background={[
          'none',
          'none',
          `linear-gradient(210deg, ${theme.colors.black} 25%, ${theme.colors.gradient.black1}), linear-gradient(${theme.colors.black}, ${theme.colors.black})`,
        ]}
        minWidth={[0, 0, '250px']}
        beforeBoxBorderWidth={[0, 0, '0 7.5px 13.0px 7.5px']}
        {...wrapperStyles}
      >
        {children}
      </MenuWrapper>
    )}
  </NavbarContext.Consumer>
)

export default withTheme(MenuDescription)
