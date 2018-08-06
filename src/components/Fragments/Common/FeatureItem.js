import React from 'react';

import {
  Box,
  Heading,
  P
} from 'serverless-design-system/src';

// TODO: Add counter based number for each image
const FeatureItem = ({ header, img, content }) => (
  <Box width={[1, 1, 1/2]} pr="100px" pb="70px">
    <img src={img} mb={2}/>
    <Heading.h3 fontFamily="SoleilBk">{header}</Heading.h3>
    <P>{content}</P>
  </Box>
);

export default FeatureItem;