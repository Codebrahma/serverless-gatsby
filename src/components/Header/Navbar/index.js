import React from 'react'
import styled from 'styled-components'

import { Box, List, ListItem } from 'serverless-design-system/src'
import NavbarContext from './../NavbarContext'
import MenuList from './Menu/List'

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
`

const smallScreenNavbarVisibility = active => (active ? 'inline-block' : 'none')

const Navbar = () => (
  <NavbarContext.Consumer>
    {({ isNavbarActive }) => (
      <Box
        width={[1, 1, 'auto']}
        display={[
          smallScreenNavbarVisibility(isNavbarActive),
          smallScreenNavbarVisibility(isNavbarActive),
          'inline-block',
        ]}
      >
        <List p='0' mt={[4, 3, 0]} ml={[4, 3, 0]} mr={0} mb={0}>
          {MenuList.map((MenuItem, index) => (
            <NavListItem
              key={index}
              display={['block', 'block', 'inline-block']}
            >
              <MenuItem />
            </NavListItem>
          ))}
        </List>
      </Box>
    )}
  </NavbarContext.Consumer>
)

export default Navbar
