import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Container,
  Flex,
  Heading,
  P,
  Image,
} from 'serverless-design-system/src';

// TODO: Add counter based number for each image
const FeatureItem = ({ header, img, content }) => (
  <Box
    width={[1, 1, 1/2]}
    pr={7}
    pb={6}
  >
    <Image src={img} />
    <Heading.h3 fontFamily="SoleilBk">
      {header}
    </Heading.h3>
    <P>{content}</P>
  </Box>
);

FeatureItem.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ({ features }) => (
  <Container px={2}>
    <Flex
      flexDirection="column"
      px={50}
      mt={6}
    >
      <Heading.h2
        align="center"
        fontFamily="SoleilSb"
        my={4}
      >
        Features
      </Heading.h2>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        mt={3}
      >
        {
          features.map(({ header, img, content }) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              img={img}
            />
          ))
        }
      </Flex>
    </Flex>
  </Container>
);