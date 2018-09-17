import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/workshop-form/Hero'
import Form from 'src/components/pages/resources/workshop-form/Form'
import Prefooter from 'src/components/pages/resources/Prefooter'
import { getParams } from 'src/utils/url'

const ResourcesMeetups = (props) => {
  const title = (getParams(props.location.search) || {}).title
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero title={title} />
      <Form />
    </DefaultLayout>
  )
}

export default ResourcesMeetups
