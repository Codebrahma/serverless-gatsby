import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Hero from 'src/components/pages/resources/meetups/Hero'
import Introduction from 'src/components/pages/resources/meetups/Introduction'
import ServerlessUserGroups from 'src/components/pages/resources/meetups/ServerlessUserGroups'
import UpcomingMeetups from 'src/components/pages/resources/meetups/UpcomingMeetups'
import Prefooter from 'src/components/pages/resources/meetups/Prefooter'

const ResourcesMeetups = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <Introduction />
    <UpcomingMeetups />
    <ServerlessUserGroups />
  </DefaultLayout>
)

export default ResourcesMeetups