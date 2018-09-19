import React, { Component } from 'react'
import styled from 'styled-components'
import Portal from '../Portal/Portal'

import { Absolute, Flex } from 'serverless-design-system/src'

const OverlayWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ invisible }) => (invisible ? 'none' : 'all')};
`

const Backdrop = styled(Absolute)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.black};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.35s;
  transition-property: opacity;
  pointer-events: ${({ invisible }) => (invisible ? 'none' : 'all')};
`

class Overlay extends Component {
  static defaultProps = {
    invisible: false,
  }

  componentDidMount() {
    if (this.props.active) {
      this.escKeyListener = document.body.addEventListener(
        'keydown',
        this.handleEscKey.bind(this)
      )
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.active && this.props.active) {
      this.enableScroll()
    }
  }

  componentDidUpdate() {
    if (this.props.active && !this.escKeyListener) {
      this.escKeyListener = document.body.addEventListener(
        'keydown',
        this.handleEscKey.bind(this)
      )
    }
  }

  componentWillUnmount() {
    this.enableScroll()
    if (this.escKeyListener) {
      document.body.removeEventListener('keydown', this.handleEscKey)
      this.escKeyListener = null
    }
  }
  preventDefault = e => {
    const event = e || window.event
    if (event.preventDefault) {
      event.preventDefault()
    }
    event.returnValue = false
  }
  disableScroll() {
    if (window.addEventListener) {
      // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false)
    }
    window.onwheel = this.preventDefault // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault // older browsers, IE
    window.ontouchmove = this.preventDefault // mobile
    document.onkeydown = this.preventDefaultForScrollKeys
  }
  preventDefaultForScrollKeys(e) {
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }
    if (keys[e.keyCode]) {
      this.preventDefault(e)
      return false
    }
  }
  enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
    }
    window.onmousewheel = document.onmousewheel = null
    window.onwheel = null
    window.ontouchmove = null
    document.onkeydown = null
  }
  handleEscKey(e) {
    if (this.props.active && this.props.onEscKeyDown && e.which === 27) {
      this.props.onEscKeyDown(e)
    }
  }

  render() {
    const { active, children, invisible, onClick } = this.props

    return (
      <Portal>
        <OverlayWrapper invisible={invisible}>
          <Backdrop onClick={onClick} active={active} invisible={invisible} />
          {children}
        </OverlayWrapper>
      </Portal>
    )
  }
}

export default Overlay