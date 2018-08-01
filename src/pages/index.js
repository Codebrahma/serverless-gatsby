import React from 'react'
import Link from 'gatsby-link'
import TrustedClients from '../components/TrustedClient';
import { Flex } from 'serverless-design-system/src';

const IndexPage = () => (
  <Flex>
    <TrustedClients />
  </Flex>
)

export default IndexPage
