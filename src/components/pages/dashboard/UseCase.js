import React from 'react'

import { UseCases } from 'src/fragments'
import dashboardIllustration1 from 'src/assets/images/dashboard-use-case-1.svg'
import dashboardIllustration2 from 'src/assets/images/dashboard-use-case-2.svg'
import dashboardIllustration3 from 'src/assets/images/dashboard-use-case-3.svg'

const cases = [
  {
    title: 'Onboarding new team members',
    description:
      'The Serverless Dashboard makes onboarding new team members easy, quick, and secure. Architecture visualizions help them get up to speed on your applications, sandbox accounts provide them a safe learning enviroment, and user access controls allow for a secure experience.',
    imgSrc: dashboardIllustration1,
  },
  {
    title: 'Operating at scale',
    description:
      'The Serverless Dashboard provides the tools you need to build, deploy, and operate Servleress applications at scale. Logging, metrics, and deep observability help you accomplish more with serverless technology.',
    imgSrc: dashboardIllustration2,
  },
  {
    title: 'Operate applications, not infrastructure',
    description:
      'The Serverless Dashboard provides an operations experience that is centered on applications, not on infrastrucutre. Regardless of their cloud experience, any developer will have the power to manage and operate serverless applications from development to production.',
    imgSrc: dashboardIllustration3,
  },
]

const UseCaseWrapper = () => (
  <UseCases
    cases={cases}
    useCaseHeader='Serverless Dashboard Use Cases'
    useCaseSubHeader='These are the 3 main use cases for the Serverless Dashboard that you should know about.'
  />
)

export default UseCaseWrapper
