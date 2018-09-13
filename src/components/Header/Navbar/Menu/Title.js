// TODO: REFACTOR THIS COMPONENT.

import React from 'react'
import { Transition, Text, withBeforeAfter } from 'serverless-design-system/src'
import NavbarContext from '../../NavbarContext'

const TitleWrapperWithLeadingSlash = withBeforeAfter(
  Transition,
  `&`,
  `
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    opacity: 0;
    margin-top: -12.5px;
    top: 50%;
    transition: all .2s;
    transition-property: height, width;
  `,
  ``,
  `
    cursor: pointer;
    position: relative;

    &:hover {
      &:before {
        opacity: 1;
        height: 25px;
        width: 5px;
        transform: rotateZ(200deg);
      }
    }
  `
)

const Title = ({ name }) => (
  <NavbarContext.Consumer>
    {({ isNavbarShrinked }) => (
      <TitleWrapperWithLeadingSlash
        px={[1, 1, '8px', '25px']}
        py={[2, 2, isNavbarShrinked ? '27.5px' : '35.5px']}
        transition={[
          'none',
          'none',
          isNavbarShrinked ? 'padding 0.5s' : 'none',
        ]}
        beforeBoxBackgroundColor={[
          'transparent',
          'transparent',
          'primaryColor',
        ]}
        beforeBoxLeft={[0, 0, '-1px', '8px']}
      >
        <Text.span
          fontFamily='Serverless'
          fontSize={2}
          color={'white'}
          letterSpacing={0.7}
        >
          {name}
        </Text.span>
      </TitleWrapperWithLeadingSlash>
    )}
  </NavbarContext.Consumer>
)

export default Title