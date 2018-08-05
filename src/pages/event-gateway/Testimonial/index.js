import React from 'react';

import { Box, withBeforeAfter } from 'serverless-design-system/src';
import testimonialBackground from '../../../assets/images/glitch-divider.png';

const TestimonialWrapper = withBeforeAfter(
  Box,
  `& > ${Box}`,
  `
    content: " ";
    height: 125px;
    width: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 50%;
    margin-top: -40px;
    background: transparent url(${testimonialBackground});
    background-size: contain;
  `,
  ''
);

export default () => (
  <TestimonialWrapper position='relative' py={5}>
  </TestimonialWrapper>
);
