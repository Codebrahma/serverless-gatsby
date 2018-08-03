import React from 'react';

import { Flex, Box, P, Image } from 'serverless-design-system/src';

const TrustedClient = () => (
  <Box width="100%" mb={['300px', '300px', '200px']}>
    <Box px={15} width={1}>
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <P fontSize={4}>
            Serverless platform is trusted by
          </P>
        </Box>
        <Flex
          flexDirection={['column', 'column%', 'row']}
          justifyContent="space-between"
          alignItems="center"
          width={1}
          px="10%"
          py="2%"
          boxSizing="border-box"
        >
          <Box mb={2}>
            <Image
              src="https://serverless.com/_/src/assets/images/ea-logo.5a55f9447c3626d1f68588cb1ed7d1a6.png"
              width={['80%', '80%', '80%', '100%']}
              maxHeight="40"
            />
          </Box>
          <Box mb={2}>
            <Image
              src="https://serverless.com/_/src/assets/images/cocacola-logo.503c39b412c589b0f1485a2c07091385.png"
              width={['80%', '80%', '80%', '100%']}
              maxHeight="40"
            />
          </Box>
          <Box mb={2}>
            <Image
              src="https://serverless.com/_/src/assets/images/nordstrom-logo.f4f30520b4330d1de1ab3dab430a9caf.png"
              width={['80%', '80%', '80%', '100%']}
              maxHeight="40"
            />
          </Box>
          <Box mb="25px">
            <Image
              src="https://serverless.com/_/src/assets/images/expedia-logo.056101cd8f42ba560c27ddfa4ae925ff.png"
              width={['80%', '80%', '80%', '100%']}
              maxHeight="40"
            />
          </Box>
          <Box mb="25px">
            <Image
              src="https://serverless.com/_/src/assets/images/reuters-logo.f1e4ccb495fa3788d3af8269d9f77541.png"
              width={['80%', '80%', '80%', '100%']}
              maxHeight="40"
            />
          </Box>
      </Flex>
    </Flex>
    </Box>
  </Box>
);

export default TrustedClient;