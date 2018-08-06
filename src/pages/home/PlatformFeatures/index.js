import React from 'react';

import { Box, Button, Container, Flex, Heading } from 'serverless-design-system/src';
import ImageCard from '../../../components/ImageCard';
import frameworkImage from '../../../assets/images/illustration-1.png';
import dashboardImage from '../../../assets/images/illustration-2.png';
import gatewayImage from '../../../assets/images/illustration-3.png';

export default () => (
  <Container mt='100px'>
    <Box mx={2}>
      <Heading.h2 fontFamily={'SoleilSb'} align='center' fontSize={[ 5, 5, 6 ]} lineHeight={[
        1, 1, 4
      ]}>
        Serverless Platform empowers developers to build & deploy serverless applications, on any provider.
      </Heading.h2>
    </Box>
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent='space-between'
      my={6}
    >
      <Box width={[1, 1, 1/3]} my={2}>
        <ImageCard
          img={frameworkImage}
          title='Automatic Scaling'
          description='Forget about provisioning & managing your server fleet. Serverless applications scale with demand'
        >
          <Flex justifyContent='center'>
            <Button border='0'>learn more</Button>
          </Flex>
        </ImageCard>
      </Box>
      <Box width={[1, 1, 1/3]} my={2}>
        <ImageCard
          img={dashboardImage}
          title='Pay-per execution'
          description='Never pay for idle. Serverless applications charge you only when they run the service.'
        >
          <Flex justifyContent='center'>
            <Button border='0'>learn more</Button>
          </Flex>
        </ImageCard>
      </Box>
      <Box width={[1, 1, 1/3]} my={2}>
        <ImageCard
          img={gatewayImage}
          title='Low Overhead'
          description='Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.'
        >
          <Flex justifyContent='center'>
            <Button border='0'>learn more</Button>
          </Flex>
        </ImageCard>
      </Box>
    </Flex>
  </Container>
);