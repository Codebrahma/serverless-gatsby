import React from 'react'
import { ResponsiveStack, HeroAdvantage } from 'serverless-design-system/src'
import RedRectangeDots from 'src/assets/images/redRectangleDots.svg'

const advantages = [
  {
    title: 'Infrastructure as Code',
    description:
      'With the Serverless Framework you can define your entire Serverless application, utlizing popular Serverless technologies like AWS Lambda, with a simple yaml configuration file.',
  },
  {
    title: 'Simple Serverless Development',
    description:
      'The Serverless Framework provides a simple, intuitive CLI experience that makes it easy to develop and deploy applications to cloud platforms like AWS, Microsoft Azure, Google Cloud Platform, IBM OpenWhisk, and more.',
  },
  {
    title: 'Provider Agnostic',
    description:
      'The Serverless Framework is open source and provider agnostic, meaning you only need one tool to tap in to the power of all the cloud providers.',
  },
]

const Advantages = () => (
  <ResponsiveStack flexWrap='wrap'>
    {
      advantages.map(({ title, description }) => (
        <HeroAdvantage
          key={title}
          title={title}
          description={description}
          img={RedRectangeDots}
        />
      ))
    }
  </ResponsiveStack>
)

export default Advantages
