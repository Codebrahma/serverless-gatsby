import React from 'react'

import { Features } from 'src/fragments'
import minimumConfiguration from 'src/assets/images/minimumConfiguration.png'
import robustEcosystem from 'src/assets/images/robustEcosystem.png'
import multiLingual from 'src/assets/images/multiLingual.png'
import cloudAgnostic from 'src/assets/images/cloudAgnostic.png'

const featureItemsData = [
  {
    header: 'Increase development speed',
    img: minimumConfiguration,
    content:
      'The serverless Framework CLI enables developers to build, test, and deploy all in the same environment. Developers write their functions in cloud-agnostic Serverless YAML, and services can be deployed with a single command. Transactionally deploy code to multiple providers, version your deployments, and roll back the deployment if necessary.',
  },
  {
    header: 'Avoid vendor lock-in',
    img: robustEcosystem,
    content:
      'Different cloud providers all have different required formats and deployment methods. The framework assembles your application into a single package that can be deployed across any cloud provider, abstracting away any necessary tweaking.',
  },
  {
    header: 'Infrastructure as Code',
    img: multiLingual,
    content:
      `Configure infrastructure across multiple clouds. Serverless cleanly integrates  with every Serverless Compute Service so that you can formalize and standardize your entire infrastructure as code.`,
  },
  {
    header: 'Existing ecosystem',
    img: cloudAgnostic,
    content:
      `The Serverless Framework is a pluggable, and many dozens of community-contributed plugins exist in our GitHub Plugins repo. The serverless Framework is widely adopted, meaning there are always active discussions on forums and there are a wide array of tutorials that will help you get started.`,
  },
]

const OverviewFeatures = () => (
  <Features
    title="Benefits of the Serverless Framework"
    description="These are the 4 core benefits of the Serverless Framework you should know about"
    features={featureItemsData}
  />
)

export default OverviewFeatures
