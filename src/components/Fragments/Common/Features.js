import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Container,
  Flex,
  Heading,
  P,
  Image,
  withBeforeAfter,
} from 'serverless-design-system/src';

const HeaderWithCount = withBeforeAfter(
  Heading.h3,
  `&`,
  `
    content: counter(step-counter, decimal-leading-zero);
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
  <Box
    width={[1, 1, 4/10]}
    mr={[0, 0, rightAligned ? '10%' : 0]}
    ml={[0, 0, rightAligned ? 0 : '10%' ]}
    pb={6}
    position='relative'
    style={{ counterIncrement: 'step-counter' }}
  >
    <Image src={img} mb={25} />
    <HeaderWithCount fontFamily="SoleilBk">
      {header}
    </HeaderWithCount>
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
      px={5}
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