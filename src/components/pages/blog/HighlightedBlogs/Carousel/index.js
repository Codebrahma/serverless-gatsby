import React, { Component, Children, cloneElement } from 'react';
import Swipeable from 'react-swipeable'

import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'

const throttle = (func, wait, options) => {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? 'prev' : 'next',
      sliding: false
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2) return itemIndex

    if (itemIndex - position < 0) return numItems - Math.abs(itemIndex - position)
    return itemIndex - position
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })

    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 1) return

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 0) return

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  handleSwipe = throttle((isNext) => {
    const { children } = this.props
    const numItems = children.length || 1

    if (isNext && numItems > 1) {
      this.nextSlide()
    } else if (numItems > 1) {
      this.prevSlide()
    }
  }, 500, { trailing: false })

  goToSlide = (position) => {
    if (position !== this.state.position) {
      this.doSliding(
        (position > this.state.position) ? 'next' : 'prev',
        position
      )
    }
  }

  render() {
    const { children } = this.props
    const { sliding, direction, position } = this.state

    const childrenWithProps = Children.map(children,
      (child) => cloneElement(child, {
        numSlides: children.length || 1,
        goToSlide: this.goToSlide,
        currentSlide: position,
      })
    )

    return (
      <div>
        <Swipeable
          onSwipingLeft={() => this.handleSwipe(true)}
          onSwipingRight={() => this.handleSwipe()}
        >
          <Wrapper>
            <CarouselContainer
              sliding={ sliding }
              direction={ direction }
              numSlides={ childrenWithProps.length }
            >
              {
                childrenWithProps.map((child, index) => (
                  <CarouselSlot
                    key={ index }
                    order={ this.getOrder(index) }
                    numSlides={ childrenWithProps.length }
                    position={ position }
                  >
                    {child}
                  </CarouselSlot>
                ))
              }
            </CarouselContainer>
          </Wrapper>
        </Swipeable>
      </div>
    )
  }
}

export default Carousel;
