import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Container,
  Flex,
  Heading,
  P,
  GatsbyImg,
  withBeforeAfter,
} from 'serverless-design-system/src';
// Dummy
const HeaderWithCount = withBeforeAfter(
  Heading.h3,
  `&`,
  `
    position: absolute;
    color: #fd5750;
    font-family: 'Soleil';
    font-size: 160px;
    font-size: 10rem;
    line-height: 1;
    z-index: -1;
    opacity: 0.2;
    top: 7.5rem;
    left: -5rem;
  `,
  null
);

const FeatureItem = ({ header, img, content, rightAligned }) => (
  <Box.relative
    width={[1, 1, 3/7, 4/10]}
    mr={[0, 0, 2, rightAligned ? '10%' : 0]}
    ml={[0, 0, 2, rightAligned ? 0 : '10%' ]}
    pb={[4, 4, 6]}
    style={{ counterIncrement: 'step-counter' }}
  >
    <GatsbyImg
      title="header"
      alt="header"
      resolutions={img.resolutions} mb={2}
    />
    <HeaderWithCount
      fontFamily="SoleilBk"
      beforeBoxContent={[
        'none',
        'none',
        "counter(step-counter, decimal-leading-zero)"
      ]}
    >
      {header}
    </HeaderWithCount>
    <P>{content}</P>
  </Box.relative>
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
      px={[0, 0, 2, 5]}
      mt={5}
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
          features.map(({ header, img, content }, index) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              img={img}
              rightAligned={index % 2 === 0}
            />
          ))
        }
      </Flex>
    </Flex>
  </Container>
);
