import React from 'react'

import {
  Box,
  Container,
  Heading,
  ImageCard,
  ResponsiveStack,
} from 'serverless-design-system/src'
import autoScalingIcon from 'src/assets/images/icon-vol.png'
import payPerExecutionIcon from 'src/assets/images/icon-graph.png'
import lowOverheadIcon from 'src/assets/images/icon-dash.png'

const cardList = [
  {
    img: autoScalingIcon,
    title: 'Automatic Scaling',
    description: 'Forget about provisioning & managing your server fleet. Serverless applications scale with demand',
  },
  {
    img: payPerExecutionIcon,
    title: 'Pay-per execution',
    description: 'Never pay for idle. Serverless applications charge you only when they run the service.',
  },
  {
    img: lowOverheadIcon,
    title: 'Low Overhead',
    description: 'Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.',
  },
];

const EachBenefit = ({ img, title, description }) => (
  <Box width={[1, 1, 1 / 3]}>
    <ImageCard
      img={img}
      title={title}
      description={description}
    />
  </Box>
)

const HomeBenefits = () => (
  <Container mt='100px'>
    <Box mx={2}>
      <Heading.h2 fontFamily={'SoleilSb'} align='center' fontSize={[5, 5, 6]}>
        Build more, manage less.
        <br /><br />
        Serverless lets you focus on driving business value.
      </Heading.h2>
    </Box>
    <Heading.h4
      fontFamily={'SoleilBk'}
      align='center'
      my={[3, 3, 5]}
      fontSize={[2, 2, 4]}
    >
      The benefits of serverless technology
    </Heading.h4>
    <ResponsiveStack.spaceBetween>
      {
        cardList.map((list) => (
          <EachBenefit
            key={list.title}
            img={list.img}
            title={list.title}
            description={list.description}
          />
        ))
      }
    </ResponsiveStack.spaceBetween>
  </Container>
)

export default HomeBenefits