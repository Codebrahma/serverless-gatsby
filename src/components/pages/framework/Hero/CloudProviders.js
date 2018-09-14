import React from 'react'

import {
  Flex,
  Box,
  P,
  ResponsiveStack,
  ImageList,
} from 'serverless-design-system/src'

import google from 'src/assets/images/cloud-google.svg'
import azure from 'src/assets/images/cloud-azure.svg'
import aws from 'src/assets/images/cloud-aws.svg'
import ibm from 'src/assets/images/cloud-ibm.svg'
import kubernetes from 'src/assets/images/cloud-kubernetes.svg'

const CloudProvidersList = [
  { src: google, altText: 'google' },
  { src: azure, altText: 'azure' },
  { src: aws, altText: 'aws' },
  { src: ibm, altText: 'ibm' },
  { src: kubernetes, altText: 'kubernetes' },
]

const CloudProviders = () => (
  <Box width={1}>
    <Box px={[0, 0, 15]} width={1}>
      <Flex.verticallyCenter flexDirection='column'>
        <Box>
          <P
            fontSize={3}
            color='gray.3'
            lineHeight={3}
            letterSpacing="h6"
          >
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
            maxHeight={['50px', '50px', '50px', '60px']}
            maxWidth={['100%', '100%', '80%', '80%', '100%']}
            list={CloudProvidersList}
          />
        </ResponsiveStack.verticallyCenter>
      </Flex.verticallyCenter>
    </Box>
  </Box>
)

export default CloudProviders
