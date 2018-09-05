import React from 'react'
import { Image } from 'serverless-design-system/src'

import OptionWrapper from './OptionWrapper'
import BlogNavbarContext from '../BlogNavbarContext'
import closeIcon from 'src/assets/images/icon-close.png'
import mobileMenuIcon from 'src/assets/images/icon-mobile-menu.png'

export default () => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarActive, toggleNavbarActiveness }) => (
        <OptionWrapper
          justifyContent="flex-end"
          onClick={toggleNavbarActiveness}
        >
          <Image
            maxHeight="20px"
            src={isNavbarActive ? closeIcon : mobileMenuIcon}
            objectFit="contain"
          />
        </OptionWrapper>
      )
    }
  </BlogNavbarContext.Consumer>
)
