import React from 'react';

import { Flex, Box, TextField, Button, Image, P } from 'serverless-design-system/src';

import footerFb from '../../assets/images/footerFb.png';
import footerInsta from '../../assets/images/footerInst.png';
import footerTwitter from '../../assets/images/footerTwitter.png';

// Renders the subscribe column
const Subscribe = () => (
  <Flex
    flexDirection="column"
    width={[1, 1, 0.35]}
    order={['1', '1', '2']}
    pl={[0, 0, 3]}
  >
    <Box mb={4}>
      <P color="white">
        Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
      </P>
    </Box>
    <Flex.horizontallyCenter
      flexDirection={['column', 'column', 'row']}
    >
      <TextField
        color="white"
        bg="gray.3"
        border="none"
        fontSize={3}
        letterSpacing="textField"
        lineHeight={4}
        opacity="0.2"
        placeholder="email address"
        px={[1, 1, 1]}
        py={2}
        width={[1, 1, 0.6]}
        boxSizing="border-box"
      />
      <Button
        width={['35%', '35%', '40%']}
        px={[0, 0, 1]}
        py={2}
        textAlign="center"
        border={0}
        fontSize={2}
      >
        Sign up
      </Button>
    </Flex.horizontallyCenter>
    <Box py={3}>
      <Image mr={3} src={footerFb} />
      <Image mr={3} src={footerInsta} />
      <Image mr={3} src={footerTwitter} />
    </Box>
  </Flex>
);

export default Subscribe;