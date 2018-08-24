import React from 'react'

import { Features } from 'src/fragments'
import minimumConfiguration from 'src/assets/images/minimumConfiguration.png'
import robustEcosystem from 'src/assets/images/robustEcosystem.png'
import multiLingual from 'src/assets/images/multiLingual.png'
import cloudAgnostic from 'src/assets/images/cloudAgnostic.png'

const featureItemsData = [
  {
    header: 'Zero administration',
    img: minimumConfiguration,
    content:
      'Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.',
  },
  {
    header: 'Auto-scaling',
    img: robustEcosystem,
    content:
      'Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend fulls the same way -- with peace of mind.',
  },
  {
    header: 'Pay-per-use',
    img: multiLingual,
    content:
      `Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don't use.`,
  },
  {
    header: 'Increased velocity',
    img: cloudAgnostic,
    content:
      `Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.`,
  },
]

const OverviewFeatures = () => (
  <Features
    title="Benefits of the Serverless Framework"
    description="These are the 4 core benefits of the Serverless Framework you should know about"
    features={featureItemsData}
    leadingNumber={false}
  />
)

export default OverviewFeatures
