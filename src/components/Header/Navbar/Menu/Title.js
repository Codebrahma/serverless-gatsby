import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'serverless-design-system/src';
import NavbarContext from '../../NavbarContext';

const TitleWrapperWithLeadingSlash = styled(Box.relative)`
  &:before {
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    left: 0;
    opacity: 0;
    background: ${(props) => props.theme.colors.serverlessRed}
    margin-top: -12.5px;
    top: 50%;
    transition: all .2s;
    transition-property: height, width;
  }

  &:hover {
    &:before {
      opacity: 1;
      left: 5px;
      height: 25px;
      width: 5px;
      transform: rotateZ(200deg);
    }
  }
`;

export default ({ name }) => (
  <NavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <TitleWrapperWithLeadingSlash
          px={[ 1, 1, '8px', '25px' ]}
          py={[ 2, 2, isNavbarShrinked ? '27.5px' : '35.5px' ]}
          transition={[
            'none',
            'none',
            isNavbarShrinked ? 'padding 0.5s' : 'none'
          ]}
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
      )
    }
  </NavbarContext.Consumer>
);
