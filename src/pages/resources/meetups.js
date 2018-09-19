import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/meetups/Hero'
import Introduction from 'src/components/pages/resources/meetups/Introduction'
import ServerlessUserGroups from 'src/components/pages/resources/meetups/ServerlessUserGroups'
import UpcomingMeetups from 'src/components/pages/resources/meetups/UpcomingMeetups'
import Prefooter from 'src/components/pages/resources/meetups/Prefooter'
import { Helmet } from 'src/fragments'

const ResourcesMeetups = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet title="Serverless Meetups" location={location} />
    <Hero />
    <Introduction />
    <UpcomingMeetups />
    <ServerlessUserGroups />
  </DefaultLayout>
)

export default ResourcesMeetups
