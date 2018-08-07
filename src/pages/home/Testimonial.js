import React from 'react';

import { Box, Container, withBeforeAfter } from 'serverless-design-system/src';
import Testimonial from '../../components/Testimonial';
import testimonialBackground from '../../assets/images/glitch-effect.png';
import cocaColaLogo from '../../assets/images/cocacola-logo.png';

const TestimonialWrapper = withBeforeAfter(
  Box.relative,
  `& > ${Box}`,
  `
    content: " ";
    height: 80px;
    width: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 50%;
    margin-top: -40px;
    background: transparent url(${testimonialBackground});
    opacity: 0.05;
  `,
  ''
);

export default () => (
  <TestimonialWrapper>
    <Box.relative mx={3} my={4}>
      <Container>
        <Testimonial
          img={cocaColaLogo}
          name="Patrick Brandt"
          designation="Solutions Architect at The Coca Cola Company"
          alt="Coca Cola"
        >
          "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
        </Testimonial>
      </Container>
    </Box.relative>
  </TestimonialWrapper>
);
