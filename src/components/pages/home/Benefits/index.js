import React from 'react'
import {
  Box,
  Heading,
  ImageCard,
  ResponsiveStack,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { HeadingWithMaxWidth } from 'src/fragments'
import autoScalingIcon from 'src/assets/images/icon-vol.svg'
import payPerExecutionIcon from 'src/assets/images/icon-graph.svg'
import lowOverheadIcon from 'src/assets/images/icon-dash.svg'

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
  <AppContainer>
    <Box mx={2} mt={7}>
      <HeadingWithMaxWidth>
        Build more, manage less.
        <br />
        Serverless lets you focus on driving business value.
      </HeadingWithMaxWidth>
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
        cardList.map((benefit) => (
          <EachBenefit
            key={benefit.title}
            img={benefit.img}
            title={benefit.title}
            description={benefit.description}
          />
        ))
      }
    </ResponsiveStack.spaceBetween>
  </AppContainer>
)

export default HomeBenefits