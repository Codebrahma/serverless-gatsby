import React from 'react'
import { Description } from 'src/fragments'
import learnDashboardAboutFramework from 'src/assets/images/learnDashboardAboutFramework.png'

export default () => (
  <Description
    title="The Serverless Framework"
    descriptions={[
      "If the Serverless Application is the new and improved application house on the block, then the Serverless Framework is the door you use to enter that house.",
      "Serverless Applications are the next step in cloud-native development, and they require automation. If youre trying together multiple managed services and functions, you cannot rely on a checklist of manual steps. You should be able to recreate your entire application with a command.",
      "That is where the Serverless Framework comes in. Use the Serverless Framework CLI to build and deploy your application to any and every cloud provider with a consistent experience. The Framework automatically configures cloud vendor settings for you, based on the language you use and the cloud provider you deploy to.",
      "Keeping a maniacal focus on business value applies to your development tooling as well. Kids, don't roll your own deployment tools.",
    ]}
    imgSrc={learnDashboardAboutFramework}
    imageAlignment="right"
  />
);
