import styled from 'styled-components';

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${(props) => props.order};
  opacity: ${(props) => {
    if (props.numSlides === 1) return 1
    if (props.numSlides === 2) return props.order === props.position ? 1 : 0.5
    return props.order === 1 ? 1 : 0.5
  }};
  transition: opacity 0.5s ease;
`

export default CarouselSlot;
