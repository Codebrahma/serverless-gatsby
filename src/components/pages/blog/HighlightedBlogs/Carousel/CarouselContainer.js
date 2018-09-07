import React from 'react'
import styled from 'styled-components'
import { Transition } from 'serverless-design-system/src'

const CarouselContainer = styled(Transition)`
  display: flex;

  transform: ${(props) => {
    if (props.numSlides === 1) return 'translateX(0%)'

    if (props.numSlides === 2) {
      if (!props.sliding && props.direction === 'next') return 'translateX(calc(-100%))'
      if (!props.sliding && props.direction === 'prev') return 'translateX(0%)'
      if (props.direction === 'prev') return 'translateX(calc(-100%))'
      return 'translateX(0%)'
    }

    if (!props.sliding) return 'translateX(calc(-100%))'
    if (props.direction === 'prev') return 'translateX(calc(2 * (-100%)))'
    return 'translateX(0%)'
  }};
`

export default (props) => {
  const transition = props.sliding ? 'none' : 'transform 0.5s ease';

  return (
    <CarouselContainer
      transition={[transition, transition, 'none']}
      {...props}
    />
  );
}
