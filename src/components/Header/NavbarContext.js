import React from 'react'

export default React.createContext({
  isNavbarActive: false,
  isNavbarShrinked: false,
  toggleNavbarActiveness: () => {},
  toggleNavbarShrinkness: () => {},
})
