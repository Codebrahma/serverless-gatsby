import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Features } from 'src/fragments'
import { resources } from 'src/constants/urls'
import Action from './Action'
import resourcesOverviewBlog from 'src/assets/images/icon-blog.svg'
import resourcesOverviewForum from 'src/assets/images/icon-forum.svg'
import resourcesOverviewMeetup from 'src/assets/images/icon-meetup.svg'
import resourcesOverviewWorkshop from 'src/assets/images/icon-workshop.svg'

const featureItemsData = [
  {
    header: 'Forums',
    img: resourcesOverviewForum,
    content:
      'Getting stuck? Want advice? The Serverless Forums are a great place to start.',
    action: (<Action link={resources.forum} options={{ crossDomain: true }} />),
  },
  {
    header: 'Meetups',
    img: resourcesOverviewMeetup,
    content:
      'Serverless Meetups are held locally in cities worldwide. Get together. Share what you know. Learn from the implementations of others.',
    action: (<Action link={resources.meetups} />),
  },
  {
    header: 'Workshops',
    img: resourcesOverviewWorkshop,
    content:
      'Learn about testing, security and operations in our one-day Serverless Developer Workshops. These workshops will help you speed up operationalization of serverless architectures across your entire organization. Join the waitlist for your city.',
    action: (<Action link={resources.workshops} />),
  },
  {
    header: 'Blog',
    img: resourcesOverviewBlog,
    content:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    action: (<Action name="view the blog" link={resources.blog} />),
  },
]

const FrameworkFeatures = () => (
  <Box
    pb={[12, 12, 10]}
    mb={[4, 4, 0]}
  >
    <Features
      features={featureItemsData}
      title="Get involed in the Serverless Community"
      description="by a community of productivity-minded, user-centric developers all over the world."
      leadingNumber={false}
    />
  </Box>
)

export default FrameworkFeatures
