import React from 'react'
import styled from 'styled-components'
import {
  Absolute,
  Box,
  Relative,
  Row,
} from 'serverless-design-system/src'

const Pointer = styled(Box)`
  cursor: pointer;
`

export default class Carousel extends React.Component {
  state = { currentIndex: 0 }

  componentDidMount() {
    this.setSlideInterval()
  }

  componentWillUnmount() {
    this.clearSlideInterval()
  }

  setSlideInterval = () => {
    this.intervalID = setInterval(() => {
      const nextIndex = (this.state.currentIndex + 1) % this.props.children.length
      this.setState({ currentIndex: nextIndex })
    }, 5000)
  }

  clearSlideInterval = () => {
    clearInterval(this.intervalID)
  }

  selectCarousel = (index) => {
    this.setState({
      currentIndex: index,
      animating: false,
    })
    setTimeout(() => {
      this.clearSlideInterval()
      this.setSlideInterval()
    }, 50)
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <Relative width={1}>
        <Relative
          width={1}
          height={[450, 450, 450, 550]}
        >
          {
            this.props.children.map((child, index) => (
              <Absolute
                height="fullHeight"
                width={1}
                style={{
                  transition: "opacity 1s ease-in-out",
                  opacity: index === currentIndex ? 1 : 0,
                  zIndex: index === currentIndex ? 0 : -1
                }}
                key={`selector-${index}`}
              >
                { child }
              </Absolute>
            ))
          }
        </Relative>
        <Absolute
          width={1}
          bottom={[15, 15, 20, 20, 20]}
        >
          <Row
            width={1}
            justifyContent="center"
          >
            {
              this.props.children.map((_, index) => (
                <Pointer
                  key={`carousel-${index}`}
                  bg={index === currentIndex ? 'primaryColor' : 'white'}
                  height={[10, 10, 15]}
                  width={[10, 10, 15]}
                  mx={7.5}
                  onClick={() => this.selectCarousel(index)}
                />
              ))
            }
          </Row>
        </Absolute>
      </Relative>
    )
  }
}
