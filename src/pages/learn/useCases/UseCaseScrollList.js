import React from 'react'
import { Flex, Box } from 'serverless-design-system/src'

import {
  AutoScrollList,
  AutoScrollMenu,
} from '../../../fragments'

import LearnUsecase01 from '../../../assets/images/LearnUsecase01.png'
import LearnUsecase02 from '../../../assets/images/LearnUsecase02.png'
import LearnUsecase03 from '../../../assets/images/LearnUsecase03.png'
import LearnUsecase04 from '../../../assets/images/LearnUsecase04.png'
import LearnUsecase05 from '../../../assets/images/LearnUsecase05.png'
import LearnUsecase06 from '../../../assets/images/LearnUsecase06.png'
import LearnUsecase07 from '../../../assets/images/LearnUsecase07.png'

const comparisonData = [
  {
    title: 'Auto-scaling Websites and APIs',
    image: LearnUsecase01,
    contents: [
      'Serverless websites and applications can be written and deployed without the front-work of setting up infrastructure. As such, it is possible to launch a fully-functional site in days. The best part is that serverless backends scale automatically with demand. No need to fear crashing when you get sudden surges of traffic.'
    ]
  },
  {
    title: 'Event streaming',
    image: LearnUsecase02,
    contents: [
      'Serverless compute can be triggered from pub/sub topics or from event logs, giving you elastic, scalable event pipelines without the maintenance of complicated clusters. These event streaming pipelines can power your analytics systems, update secondary data stores and caches, or feed monitoring systems.'
    ]
  },
  {
    title: 'Image and Video Manipulation',
    image: LearnUsecase03,
    contents: [
      'Serverless allows you to build performance-enhancing image and video services for any application. You can use serverless services to do things like dynamically resize images or change video transcoding for different target devices.',
      'Applications are also increasingly relying on things like image recognition to improve user experience: for example, an ecommerce app that allows customers to photograph the front of their credit card instead of typing the numbers in manually.',
      'With Serverless, you can tap into the Google Vision API or Amazon Rekognition to recognize faces and images (e.g. for profile photos), or flag inappropriate content. You can automatically process and reformat user-uploaded images, or resize them into specific thumbnail dimensions.',
    ]
  },
  {
    title: 'Processing Events and SaaS',
    image: LearnUsecase04,
    contents: [
      `Modern applications are incredibly modular, in that they heavily utilize software from 3rd party SaaS providers (GitHub, Twilio, Auth0, Stripe) to deliver functionality. These SaaS providers don’t let you run functions on their system, but they do emit events.`,
      'Serverless lets you subscribe functions to those events, regardless of where those functions are hosted. You can use this to take action.',
      'Pipe user data and activities to Salesforce to enhance lead flow. React to Stripe payments being processed. Automate GitHub workflows with functions running as webhook listeners. There are many, many rich possibilities here.',
    ]
  },
  {
    title: 'Hybrid Cloud Applications',
    image: LearnUsecase05,
    contents: [
      'Individual cloud providers often don’t meet every business requirement on their own. Teams choose to utilize the strongest features from each vendor, requiring them to deploy services to multiple providers inside a single application. But the cloud providers themselves do not make it easy to do this.',      
      'Our tooling abstracts away any necessary tweaking required to get functions to fit cloud vendors’ unique formats. This lets you easily deploy to any cloud provider you choose, thus maximizing the efficacy of your application and utilizing the best each cloud vendor has to offer.'
    ]
  },
  {
    title: 'Multi-language Applications',
    image: LearnUsecase06,
    contents: [
      'When building an application, the first discussion is usually about which language to use. The language chosen isn’t always about what suits the project best, but rather which resources are already on-hand.',
      'With serverless, applications can be multilingual. This fosters polyglot teams and enables seamless integration of services into an application that were written by specialized teams. It further prevents teams from getting locked into using the same language as their legacy software indefinitely; new languages can be used for new services and still talk to legacy services as needed.'
    ]
  },
  {
    title: 'Continuous Inegration and Continuous Deployment(CI/CD)',
    image: LearnUsecase07,
    contents: [
      'The ability to rapidly iterate software is more important than it has ever been. CI/CD pipelines allow you to ship code in small increments, so that bug fixes and other updates can be shipped on a daily basis.',
      'Serverless can automate many of these processes. Code checkins can trigger website builds and automatic redeploys, or PRs can trigger running automated tests to make sure code is well-tested before human review.',
      'When you think about automation possibilities with Serverless Applications, it becomes easy to cut manual tasks out of your workflow.'
    ]
  },
]

const UseCaseScrollList = () => (
  <Flex flexDirection={['column', 'column', 'row']} mt={8} mb={9}>
    <AutoScrollMenu listData={comparisonData} />
    <AutoScrollList listData={comparisonData} />
  </Flex>
)

export default UseCaseScrollList