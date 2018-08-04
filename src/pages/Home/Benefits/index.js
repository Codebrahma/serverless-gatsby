import React from 'react';

import { Container, Heading, Box, Flex } from 'serverless-design-system/src';
import ImageCard from '../../../components/ImageCard';
import autoScalingIcon from '../../../assets/images/icon-vol.png';
import payPerExecutionIcon from '../../../assets/images/icon-graph.png';
import lowOverheadIcon from '../../../assets/images/icon-dash.png';

export default () => (
  <Container mt='100px'>
    <Box mx={2}>
      <Heading.h2 fontFamily={'SoleilSb'} align='center' fontSize={[ 5, 5, 6 ]}>
        Build more, manage less.
      </Heading.h2>
      <Heading.h2 fontFamily={'SoleilSb'} align='center' fontSize={[ 5, 5, 6 ]}>
        Serverless lets you focus on driving business value.
      </Heading.h2>
    </Box>
    <Heading.h4 fontFamily={'SoleilBk'} align='center' my={[3, 3, 5]} fontSize={[ 2, 2, 4 ]}>
      The benefits of serverless technology
    </Heading.h4>
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent='space-between'
    >
      <Box width={[1, 1, 1/3]}>
        <ImageCard
          img={autoScalingIcon}
          title='Automatic Scaling'
          description='Forget about provisioning & managing your server fleet. Serverless applications scale with demand'
        />
      </Box>
      <Box width={[1, 1, 1/3]}>
        <ImageCard
          img={payPerExecutionIcon}
          title='Pay-per execution'
          description='Never pay for idle. Serverless applications charge you only when they run the service.'
        />
      </Box>
      <Box width={[1, 1, 1/3]}>
        <ImageCard
          img={lowOverheadIcon}
          title='Low Overhead'
          description='Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.'
        />
      </Box>
    </Flex>
  </Container>
)
