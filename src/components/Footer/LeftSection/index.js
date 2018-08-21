import React from 'react'

import { Flex, Column } from 'serverless-design-system/src'

import CompanyDetails from './CompanyDetails'
import PlatformColumn from './PlatformColumn'
import DevelopersColumn from './DevelopersColumn'
import LearnColumn from './LearnColumn'
import ResourcesColumn from './ResourcesColumn'
import CompanyColumn from './CompanyColumn'

// Renders the entire footer list items
const LeftSection = () => (
  <Column width={[1, 1, 0.65]} order={['2', '2', '1']}>
    <Flex width={1} flexWrap='wrap' px={[1, 1, 0]} mb={4}>
      <PlatformColumn />
      <DevelopersColumn />
      <LearnColumn />
      <ResourcesColumn />
      <CompanyColumn />
    </Flex>
    <CompanyDetails />
  </Column>
)

export default LeftSection
