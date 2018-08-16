import React from 'react'

import { UseCases } from 'src/fragments'
import learnOverviewUsecase1 from 'src/assets/images/learnOverviewUsecase1.png'
import learnOverviewUsecase2 from 'src/assets/images/learnOverviewUsecase2.png'

import dataProcessing from 'src/assets/images/dataProcessing.png'
import easyAutomation from 'src/assets/images/easyAutomation.png'

const cases = [
  {
    title: 'The serverless movement',
    description:
      'Serverless has become a movement about developer empowerment. As a technology, it abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding. What this means is that you, the developer, can rapidly build apps that handle production-ready traffic. You dont have to actively manage scaling for your applications. You dont have to provision servers, or pay for resources that go unused. The technology is still early, but thousands of developers are already proving that serverless can enavle them to launch applications at record speed and cost.',
    imgSrc: learnOverviewUsecase1,
  },
  {
    title: 'What makes an application serverless?',
    description:
      'The serverless movement started with release of AWS Lambda, a Function-as-a-Service (FaaS) compute service. But serverless is much more than just FaaS. Ultimately, serverless is about focusing your efforts on what provides value to your users. This means using managed services for databases, search indexes, queues, SMS messaging, and email delivery. It means trying these services together using stateless, ephemeral compute like the various Faas offerings. Upgrading your Linux distro does not provide value for your users. MAnaging your RabbitMQ servers does not provide value to your users. Shipping product provides value to your users.',
    imgSrc: learnOverviewUsecase2,
  },
]

const UseCaseWrapper = () => (
  <UseCases
    cases={cases}
  />
)

export default UseCaseWrapper
