import React from 'react';
import styled from 'styled-components';
import {
  Box, Button, Container, Flex, Heading, Image, SecondaryButton, ImageCard, Testimonial
} from 'serverless-design-system/src';

const HeroImageWrapper = styled(Flex)`
  & > ${Flex}:nth-child(2) > ${Flex} {
    position: relative;

    &:before {
      content: " ";
      position: absolute;
      top: 50%;
      right: 130%;
      margin-top: -1px;
      height: 20px;
      width: 180px;
      background: url('https://serverless.com/_/src/assets/images/bullet-left-marker.fe84000a298e81b7be416328284d4446.png') center center no-repeat;
      background-position: center center;
    }

    &:after {
      content: " ";
      position: absolute;
      top: 50%;
      left: 130%;
      margin-top: -1px;
      height: 20px;
      width: 180px;
      background: url('https://serverless.com/_/src/assets/images/bullet-right-marker.6b8a056ab691d04a133f9c967ebc2b38.png') center center no-repeat;
      background-position: center center;
    }
  }
`;

export default () => (
  <Box width={1}>
    <Box bg='black'>
      <Container px={0} py={[0, 0, 4]}>
        <Heading.h3 align='center' fontFamily='Serverless' color='white'>
          serverless
        </Heading.h3>
        <Heading.h1 align='center' fontFamily='Serverless' color='white'>
          platform
        </Heading.h1>
        <Heading.h3 align='center' fontFamily='SoleilBk' color='white' my={4}>
          Everything you need to operationalize serverless development
        </Heading.h3>
        <HeroImageWrapper
          flexDirection='row'
          display='flex'
          width={[1, 1, 3/4]}
          mx='auto'
          my={5}
        >
          <Flex
            display='flex'
            flexDirection='column'
            width={[1, 1, 1/3]}
            alignItems='center'
          >
            <Flex
              height='86px'
              display='flex'
              alignItems='center'
              my='16px'
            >
              <Image
                src={'https://serverless.com/_/src/assets/images/bolt.be31a2cb237f3c0d40581ecba9efa8d3.png'}
                maxHeight='86px'
                maxWidth='70px'
              />
            </Flex>
            <Heading.h5 color='white'>serverless</Heading.h5>
            <Heading.h4 color='white' fontWeight='bold'>framework</Heading.h4>
          </Flex>
          <Flex
            display='flex'
            flexDirection='column'
            width={[1, 1, 1/3]}
            alignItems='center'
          >
            <Flex
              height='86px'
              display='flex'
              alignItems='center'
              my='16px'
            >
              <Image
                src={'https://serverless.com/_/src/assets/images/icon-dashboard.670198be7530974cf50d17671215f69f.png'}
                maxHeight='86px'
                maxWidth='70px'
              />
            </Flex>
            <Heading.h5 color='white'>serverless</Heading.h5>
            <Heading.h4 color='white' fontWeight='bold'>dashboard</Heading.h4>
          </Flex>
          <Flex
            display='flex'
            flexDirection='column'
            width={[1, 1, 1/3]}
            alignItems='center'
          >
            <Flex
              height='86px'
              display='flex'
              alignItems='center'
              my='16px'
            >
              <Image
                src={'https://serverless.com/_/src/assets/images/group-6.42d1cd534252f3f9b17e6f4d3e3ac818.png'}
                maxHeight='86px'
                maxWidth='70px'
              />
            </Flex>
            <Heading.h5 color='white'>event</Heading.h5>
            <Heading.h4 color='white' fontWeight='bold'>gateway</Heading.h4>
          </Flex>
        </HeroImageWrapper>
        <Flex
          display='flex'
          flexDirection='row'
          width={[1, 1, 3/4]}
          justifyContent='center'
          mx='auto'
          my={4}
        >
          <Button mx={1} minWidth={'280px'} border={0}>sign up</Button>
          <SecondaryButton mx={1} minWidth={'280px'}>enterprise demo</SecondaryButton>
        </Flex>
        <Flex
          width={[ 1, 1, 3/4 ]}
          my={5}
          mx='auto'
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
        >
          <Image
            src='https://serverless.com/_/src/assets/images/video.39bca4f947d9338b3c4223dc50499309.png'
            height='50px'
            width='auto'
            mx={2}
          />
          <Heading.h4 color='white' mb={0}>watch the video to learn more</Heading.h4>
        </Flex>
      </Container>
    </Box>

    <Container my='100px'>
      <Heading.h2 fontFamily={'SoleilSb'} align='center'>
        Build more, manage less.
      </Heading.h2>
      <Heading.h2 fontFamily={'SoleilSb'} align='center'>
        Serverless lets you focus on driving business value.
      </Heading.h2>
      <Heading.h4 fontFamily={'SoleilBk'} align='center' my={5}>
        The benefits of serverless technology
      </Heading.h4>
      <Flex
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Box width={1/3}>
          <ImageCard
            img='http://serverless.com/_/src/assets/images/icon-vol.7c3dccb3d95994d2b3d5d7920b429b27.png'
            title='Automatic Scaling'
            description='Forget about provisioning & managing your server fleet. Serverless applications scale with demand'
          />
        </Box>
        <Box width={1/3}>
          <ImageCard
            img='https://serverless.com/_/src/assets/images/icon-graph.eadd9cdb124d869d8038f132d4fe7d28.png'
            title='Pay-per execution'
            description='Never pay for idle. Serverless applications charge you only when they run the service.'
          />
        </Box>
        <Box width={1/3}>
          <ImageCard
            img='https://serverless.com/_/src/assets/images/icon-dash.83c9f30718b325f9371533d89ec2d65e.png'
            title='Low Overhead'
            description='Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.'
          />
        </Box>
      </Flex>
    </Container>
    <Box px={4}>
      <Testimonial
        img="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png"
        name="Patrick Brandt"
        designation="Solutions Architect at The Coca Cola Company"
        alt="Coca Cola"
      >
        "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
      </Testimonial>
    </Box>
    <Container mt='100px' mb='50px'>
      <Flex
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Flex
          width={1/3}
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems='center'
        >
          <ImageCard
            img='http://serverless.com/_/src/assets/images/icon-vol.7c3dccb3d95994d2b3d5d7920b429b27.png'
            title='Automatic Scaling'
            description='Forget about provisioning & managing your server fleet. Serverless applications scale with demand'
          />
          <Button>learn more</Button>
        </Flex>
        <Flex
          width={1/3}
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems='center'
        >
          <ImageCard
            img='https://serverless.com/_/src/assets/images/icon-graph.eadd9cdb124d869d8038f132d4fe7d28.png'
            title='Pay-per execution'
            description='Never pay for idle. Serverless applications charge you only when they run the service.'
          />
          <Button>learn more</Button>
        </Flex>
        <Flex
          width={1/3}
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems='center'
        >
          <ImageCard
            img='https://serverless.com/_/src/assets/images/icon-dash.83c9f30718b325f9371533d89ec2d65e.png'
            title='Low Overhead'
            description='Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.'
          />
          <Button>learn more</Button>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
