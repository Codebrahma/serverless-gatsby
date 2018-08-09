import React from 'react';

import { Flex, Box, P, ResponsiveStack } from 'serverless-design-system/src';

// Renders Company details
const CompanyDetails = () => (
  <Box width={1}>
    <Box width={[1, 1, 1/2]}>
      <P
        fontSize={0}
        lineHeight={3}
        opacity="0.5"
        m={0}
      >
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand
      </P>
    </Box>
    <ResponsiveStack
      pt={4}
      alignItems={['left', 'left', 'center']}
    >
      <Box width={[1/2, 1/2, 1]}>
        <P m={0} fontSize={0} >
          Serverless, Inc. © 2018
        </P>
      </Box>
      <Flex color="gray.3" width={[1/2, 1/2, 1]}>
        <Box>
          <P fontSize={0}>terms of service</P>
        </Box>
        <Box ml={2}>
          <P fontSize={0}>privacy policy
          </P>
        </Box>
      </Flex>
    </ResponsiveStack>
  </Box>
);

export default CompanyDetails;