import React from 'react'

import { Features } from 'src/fragments'
import zeroAdmin from 'src/assets/images/icon-circle.svg'
import autoScaling from 'src/assets/images/icon-vol-light.svg'
import payPerUse from 'src/assets/images/icon-graph-light.svg'
import increasedVelocity from 'src/assets/images/icon-audit.svg'

const featureItemsData = [
  {
    header: 'Zero administration',
    img: zeroAdmin,
    content:
      'Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.',
  },
  {
    header: 'Auto-scaling',
    img: autoScaling,
    content:
      'Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend fulls the same way -- with peace of mind.',
  },
  {
    header: 'Pay-per-use',
    img: payPerUse,
    content:
      `Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don't use.`,
  },
  {
    header: 'Increased velocity',
    img: increasedVelocity,
    content:
      `Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.`,
  },
]

const OverviewFeatures = () => (
  <Features
    title="What makes an application serverless?"
    description="These are the 4 key properties of Serverless Applications you should know about"
    features={featureItemsData}
    leadingNumber={false}
  />
)

export default OverviewFeatures
