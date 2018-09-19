import React from 'react'

import { Description } from 'src/fragments'
import serverlessMovement from 'src/assets/images/learn-serverless-movement.png'

const data = [
  {
    title: 'The Serverless Movement',
    descriptions: [
      `Serverless abstracts away the most menial parts of building an application, leaving developers free to actually spend their days coding.`,
      `What this means is that developers can single-handedly build apps that handle production-ready traffic. They don’t have to actively manage scaling for their applications. They don't have to provision servers, or pay for resources that go unused. They can just get projects off the ground with small, agile teams.`,
      `Thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost. Adoption has been fast, with companies like Coca-cola, Nordstrom, EA, and Expedia touting their number of serverless services in production.`,
      `Ultimately, serverless is about focusing your efforts on what provides value to users. Upgrading your Linux distro does not provide value to users. Managing your RabbitMQ servers does not provide value to users. Shipping product provides value to users.`,
      `That is the serverless maxim: focus on business logic, not servers. Serverless has become a movement about faster development and creative empowerment.`,
    ],
    imgSrc: serverlessMovement,
    imageAlignment: 'right',
  },
]

export default () => (
  <React.Fragment>
    { data.map((description, index) => (<Description key={index} {...description} />)) }
  </React.Fragment>
);
