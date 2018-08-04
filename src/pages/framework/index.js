import React from 'react';
import Hero from './Hero';
import UseCase from './UseCase';
import { Box, Testimonial } from 'serverless-design-system/src';

const FrameWorks = () => (
  <Box width={1} mb={200}>
    <Hero />
    <Box px={2}>
      <UseCase />
      <Testimonial
        img="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png"
        name="Patrick Brandt"
        designation="Solutions Architect at The Coca Cola Company"
        alt="Coca Cola"
      >
      "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
      </Testimonial>
    </Box>
  </Box>
);

export default FrameWorks;