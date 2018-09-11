import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Description } from 'src/fragments'
import operateWithDashboard from 'src/assets/images/operate-with-dashboard.png'
import integrateWithGateway from 'src/assets/images/integrate-with-gateway.png'

const data = [
  {
    title: 'Operate with the Serverless Dashboard',
    descriptions: [
      `The Serverless Dashboard provides architectural views of your serverless applications. It also exposes logs for metrics, alarms and debugging, and lets you collaborate easily with teammates on development.`,
      `The Dashboard, just like our Framework, is vendor-agnostic. Use any provider you want, and use multiple providers at once. We’ll expose everything in a single place.`,
    ],
    imgSrc: operateWithDashboard,
    imageAlignment: 'right',
  },
  {
    title: 'Integrate with the Serverless Event Gateway',
    descriptions: [
      `The Event Gateway is a powerful event router, capable of routing event data to serverless functions and other services across clouds. It’s the answer to how organizations can integrate serverless into their existing services and containers, easily hook into other SaaS, and span cloud providers.`,
      `With the Event Gateway, you can do things like: easily build FaaS-backed APIs, or use configurable connectors to react to events from data stores like Kafka or Kinesis.`,
    ],
    imgSrc: integrateWithGateway,
    imageAlignment: 'left',
  },
]

export default () => (
  <Box pb={[300, 300, 10, 14]}>
    { data.map((description, index) => (<Description key={index} {...description} />)) }
  </Box>
);
