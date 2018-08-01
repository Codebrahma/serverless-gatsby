import React from 'react';
import styled from 'styled-components';

import { Box, List, ListItem } from 'serverless-design-system/src';
import MenuList from './Menu/List';

const NavList = styled(List).attrs({ m: 0, p: 0 });

console.log(styled(List));
const NavListItem = styled(ListItem).attrs({
  position: 'relative',
  display: [ 'block', 'block', 'inline-block' ]
})`
  list-style-type: none;

  div > div:nth-child(2) {
    display: none;
  }

  &:hover > div {
    div:nth-child(2) {
      display: inline-block;
    }
  }
`;


const Navbar = () => (
  <Box>
    <NavList>
      {
        MenuList.map((MenuItem, index) => (
          <NavListItem key={index}>
            <MenuItem />
          </NavListItem>
        ))
      }
    </NavList>
  </Box>
)

export default Navbar;
