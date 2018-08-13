import React from 'react'
import styled from 'styled-components'
import ActivableRenderer from '../ActivableRenderer/ActivableRenderer'
import InjectOverlay from '../Overlay/Overlay'

import { Box, Flex } from 'serverless-design-system/src'

const getDimensions = ({ type }) => {
  switch (type) {
    case 'small':
      return { width: '30vw' }
    case 'normal':
      return { width: '60vw', minHeight: '60vh' }
    case 'large':
      return { width: '96vw' }
  }
}

const Dialog = styled(Flex)`
  max-width: 96vw;
  max-height: 96vh;
  flex-direction: column;
  vertical-align: middle;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  border-radius: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  text-align: center;
  transition-delay: 0.35s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.35s;
  transition-property: opacity, transform;
  transform: translateY(0%);

  ${getDimensions} a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
`

const factory = Overlay => {
  const Modal = props => {
    return (
      <Overlay
        active={props.active}
        onClick={props.onOverlayClick}
        onEscKeyDown={props.onEscKeyDown}
        onMouseDown={props.onOverlayMouseDown}
        onMouseMove={props.onOverlayMouseMove}
        onMouseUp={props.onOverlayMouseUp}
      >
        <Dialog active={props.active} type={props.type}>
          <Box role='dialog'>
            {props.title ? <h2>{props.title}</h2> : null}
            {props.children}
          </Box>
        </Dialog>
      </Overlay>
    )
  }

  Modal.defaultProps = {
    active: false,
    type: 'normal',
  }

  return ActivableRenderer()(Modal) // eslint-disable-line
}

const Modal = factory(InjectOverlay)

export default Modal
