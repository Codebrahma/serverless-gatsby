import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Prefooter from 'src/components/pages/learn/case-study/Prefooter'
import Hero from 'src/components/pages/learn/case-study/Hero'
import Parallax from 'src/components/pages/learn/case-study/Parallax'
import Results from 'src/components/pages/learn/case-study/Results'
import { Helmet } from 'src/fragments'

const CaseStudy = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet title="Serverless Case Study" location={location} />
    <Hero />
    <Parallax />
    <Results />
  </DefaultLayout>
)

export default CaseStudy