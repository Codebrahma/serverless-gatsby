import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/workshop-form/Hero'
import Form from 'src/components/pages/resources/workshop-form/Form'
import Prefooter from 'src/components/pages/resources/Prefooter'

const ResourcesMeetups = ({ pathContext: { key } }) => {
  return (
    <DefaultLayout prefooter={Prefooter} transparentHeader>
      <Hero keyName={key} />
      <Form keyName={key} />
    </DefaultLayout>
  )
}

export default ResourcesMeetups
