import React from 'react';
import styled from 'styled-components';

import { Box, List, ListItem } from 'serverless-design-system/src';
import MenuList from './Menu/List';

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
`;

const Navbar = () => (
  <Box width={[ '100%', '100%', 'auto' ]}>
    <List m='0' p='0'>
      {
        MenuList.map((MenuItem, index) => (
          <NavListItem
            key={index}
            display={[ 'block', 'block', 'inline-block' ]}>
            <MenuItem />
          </NavListItem>
        ))
      }
    </List>
  </Box>
)

export default Navbar;
