import React from 'react'

import {
  Flex,
  Box,
  P,
  ResponsiveStack,
  ImageList,
} from 'serverless-design-system/src'

import google from 'src/assets/images/cloudGoogle.png'
import azure from 'src/assets/images/cloudAzure.png'
import aws from 'src/assets/images/cloudAWS.png'
import ibm from 'src/assets/images/cloudIBM.png'
import kubernetes from 'src/assets/images/cloudKubernetes.png'

const CloudProvidersList = [
  { src: google, altText: 'google' },
  { src: azure, altText: 'azure' },
  { src: aws, altText: 'aws' },
  { src: ibm, altText: 'ibm' },
  { src: kubernetes, altText: 'kubernetes' },
]

const CloudProviders = () => (
  <Box width={1}>
    <Box px={15} width={1}>
      <Flex.verticallyCenter flexDirection='column'>
        <Box>
          <P fontSize={2} color='gray.3'>
            Supports Top Cloud Providers
          </P>
        </Box>
        <ResponsiveStack.verticallyCenter
          justifyContent='space-between'
          width={1}
          px='5%'
          py='2%'
          boxSizing='border-box'
        >
          <ImageList
            maxHeight={['41px', '41px', '41px', '60px']}
            maxWidth={['80%', '80%', '60%', '80%', '100%']}
            list={CloudProvidersList}
          />
        </ResponsiveStack.verticallyCenter>
      </Flex.verticallyCenter>
    </Box>
  </Box>
)

export default CloudProviders
