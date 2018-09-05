import React from 'react'
import { Image } from 'serverless-design-system/src'
import OptionWrapper from './OptionWrapper'
import closeIcon from 'src/assets/images/icon-close.png'
import mobileMenuIcon from 'src/assets/images/icon-mobile-menu.png'

export default class NavButton extends React.Component {
  state = { isNavbarActive: false }

  toggleNavbarActiveness = () => this.setState(({ isNavbarActive }) => (
    { isNavbarActive: !isNavbarActive }
  ))

  render() {
    return (
      <OptionWrapper
        justifyContent="flex-end"
        onClick={this.toggleNavbarActiveness}
      >
        <Image
          maxHeight="26px"
          src={this.state.isNavbarActive ? closeIcon : mobileMenuIcon}
          objectFit="contain"
        />
      </OptionWrapper>
    )
  }
}
