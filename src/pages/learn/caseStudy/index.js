import React from 'react'
import { Box } from 'serverless-design-system/src'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from './Prefooter'
import Hero from './Hero'
import Parallax from './Parallax'
import Results from './Results'

const CaseStudy = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Parallax />
    <Results />
  </DefaultLayout>
)

export default CaseStudy