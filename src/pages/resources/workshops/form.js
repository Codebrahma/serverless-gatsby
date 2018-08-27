import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/resources/workshop-form/Hero'
import Form from 'src/components/pages/resources/workshop-form/Form'
import Prefooter from 'src/components/pages/resources/workshop-form/Prefooter'

const ResourcesMeetups = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Form />
  </DefaultLayout>
)

export default ResourcesMeetups
