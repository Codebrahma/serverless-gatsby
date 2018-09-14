import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Features } from 'src/fragments'

import cloudAgnostic from 'src/assets/images/icon-dash-light.svg'
import componentized from 'src/assets/images/icon-component.svg'
import codeForInfrastructure from 'src/assets/images/icon-infra.svg'
import developmentExperience from 'src/assets/images/icon-visualize.svg'

const featureItemsData = [
  {
    header: 'Cloud-agnostic',
    img: cloudAgnostic,
    content:
      'Allowing organizations to prevent data lock-in on a single vendor. Use the Serverless Framework CLI to build and deploy your application to any cloud provider with a consistent experience. The Framework automatically configures cloud vendor settings for you, based on the language you use and the provider you deploy to.',
  },
  {
    header: 'Componentized',
    img: componentized,
    content:
      'So that developers don’t have to keep rebuilding the wheel. They can build once, use, and reuse Serverless Components to do things like create & manage DynamoDB tables or enable authentication with Auth0. Components are open source, and there is lots of pre-built functionality developers can tap into right away.',
  },
  {
    header: 'Code for your infrastructure',
    img: codeForInfrastructure,
    content:
      `Because Serverless Applications require automation. If you're tying together multiple managed services and functions, you cannot rely on a checklist of manual steps. You should be able to recreate your entire application with a command.`,
  },
  {
    header: 'Centered on development experience',
    img: developmentExperience,
    content:
      `We’re engineers, too, and we built a simple, straightforward tool we’d love using. The point of serveless is to make developers more productive; we wanted the Serverless Framework to embody that most of all.`,
  },
]

const OverviewFeatures = () => (
  <Box>
    <Features
      title="Build with the Serverless Framework"
      description="At over 25,000 GitHub stars, the open source Serverless Framework is the number one tool for building and deploying serverless applications. It is:"
      features={featureItemsData}
    />
  </Box>
)

export default OverviewFeatures
