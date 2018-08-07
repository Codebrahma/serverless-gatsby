import React from 'react';
import styled from 'styled-components';

import { Box, List, ListItem } from 'serverless-design-system/src';
import MenuList from './Menu/List';

const getNavItemStyles = ({ shrinked }) => (
  shrinked ? {
    paddingTop: '27.5px',
    paddingBottom: '27.5px',
    transition: 'padding 0.8s'
  } : null
)

const NavListItem = styled(ListItem)`
  list-style-type: none;
  position: relative;

  div > div:nth-child(2) {
    display: none;
  }

  &:hover > div {
    div:nth-child(2) {
      display: inline-block;
    }
  }

  > div > div:first-child, > div > a:first-child > div {
    ${getNavItemStyles}
  }
`;

const smallScreenNavbarVisibility = (visibility) => (
  visibility ? 'inline-block' : 'none'
)

const Navbar = ({ visibility, isNavbarShrinked }) => (
  <Box
    width={[ 1, 1, 'auto' ]}
    display={[
      smallScreenNavbarVisibility(visibility),
      smallScreenNavbarVisibility(visibility),
      'inline-block'
    ]}>
    <List m='0' p='0'>
      {
        MenuList.map((MenuItem, index) => (
          <NavListItem
            key={index}
            display={[ 'block', 'block', 'inline-block' ]}
            shrinked={isNavbarShrinked}
          >
            <MenuItem />
          </NavListItem>
        ))
      }
    </List>
  </Box>
)

export default Navbar;
