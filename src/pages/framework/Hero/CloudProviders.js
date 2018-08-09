import React from 'react';

import { Flex, Box, P, Image, ResponsiveStack } from 'serverless-design-system/src';

import google from  '../../../assets/images/cloudGoogle.png';
import azure from  '../../../assets/images/cloudAzure.png';
import aws from  '../../../assets/images/cloudAWS.png';
import ibm from  '../../../assets/images/cloudIBM.png';
import kubernetes from  '../../../assets/images/cloudKubernetes.png';

const CloudProvider = ({ imgSrc }) => (
  <Box mb={2}>
    <Image
      key={imgSrc}
      src={imgSrc}
      width={1}
    />
  </Box>
);

const cloudProviderImages = [
  google,
  azure,
  aws,
  ibm,
  kubernetes,
];

// TODO: Decide on how we can include hardcoded px outside the spaces array
const CloudProviders = () => (
  <Box width={1}>
    <Box px={15} width={1}>
      <Flex.verticallyCenter
        flexDirection="column"
      >
        <Box>
          <P fontSize={2} color="gray.3">
            Supports Top Cloud Providers
          </P>
        </Box>
        <ResponsiveStack.verticallyCenter
          justifyContent="space-between"
          width={1}
          px="5%"
          py="2%"
          boxSizing="border-box"
        >
          {cloudProviderImages.map(imgSrc => <CloudProvider key={imgSrc} imgSrc={imgSrc} />)}
        </ResponsiveStack.verticallyCenter>
      </Flex.verticallyCenter>
    </Box>
  </Box>
);

export default CloudProviders;