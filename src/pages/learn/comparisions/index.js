import React from 'react'
import { Flex, Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import ComparisionList from './ComparisionList'
import ComparisionSelector from './ComparisionSelector'

// import comparisionCloudFormation from './comparisionCloudFormation'
// import comparisionCustomTooling from './comparisionCustomTooling'
// import comparisionDocker from './comparisionDocker'
// import comparisionHeroku from './comparisionHeroku'
// import comparisionSAM from './comparisionSAM'
// import comparisionCloudFormation from './comparisionCloudFormation'
// import comparisionTerraForm from './comparisionTerraForm'
// import comparisionZampa from './comparisionZampa'

const Comparisions = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Flex flexDirection={['column', 'column', 'row']}>
      <ComparisionSelector />
      <ComparisionList />
    </Flex>
  </DefaultLayout>
)

export default Comparisions