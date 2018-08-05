import React from 'react';

import {
  Flex,
  Box,
  Heading,
  Image,
  P,
} from 'serverless-design-system/src';

import dashboardIllustration1 from '../../../assets/images/illustration-use-case-1.png';
import dashboardIllustration2 from '../../../assets/images/illustration-use-case-2.png';
import dashboardIllustration3 from '../../../assets/images/illustration-use-case-3.png';

const UseCase = ({ title, description, imgSrc, reverse }) => (
  <Flex flexDirection={['column', 'column', 'row']} py={[3, 3, 5]}>
    <Flex
      width={[1, 1, 0.5]}
      mb={2}
      pr={[0, 0, 55, 110]}
      order={reverse ? [1, 1, 2] : [2, 2, 1]}
      flexDirection="column"
    >
      <Heading.h3 fontFamily="SoleilBk">{title}</Heading.h3>
      <P>{ description }</P>
    </Flex>
    <Flex
      width={[1, 1, 0.5]}
      mb={2}
      justifyContent="center"
      order={reverse ? [2, 2, 1] : [1, 1, 2]}
    >
      <Image
        src={imgSrc}
        alt={title}
        maxWidth={1}
        width={0.6}
        maxHeight={240}
        my="auto"
      />
    </Flex>
  </Flex>
);

const UseCases = () => (
  <Flex flexDirection="column" justifyContent="center">
    <Box mt={[5, 5, 8]}>
      <P align="center" fontSize={6} color="black" m={1}>
        Serverless Dashboard Use Cases
      </P>
      <P align="center" fontSize={0}>
        These are the 3 main use cases for the Serverless Dashboard that you should know about.
      </P>
    </Box>
    <UseCase
      title='Onboarding new team members'
      description='The Serverless Dashboard makes onboarding new team members easy, quick, and secure. Architecture visualizions help them get up to speed on your applications, sandbox accounts provide them a safe learning enviroment, and user access controls allow for a secure experience.'
      imgSrc={dashboardIllustration1}
    />
    <UseCase
      title='Operating at scale'
      description='The Serverless Dashboard provides the tools you need to build, deploy, and operate Servleress applications at scale. Logging, metrics, and deep observability help you accomplish more with serverless technology.'
      imgSrc={dashboardIllustration2}
      reverse
    />
    <UseCase
      title='Operate applications, not infrastructure'
      description='The Serverless Dashboard provides an operations experience that is centered on applications, not on infrastrucutre. Regardless of their cloud experience, any developer will have the power to manage and operate serverless applications from development to production.'
      imgSrc={dashboardIllustration3}
    />
  </Flex>
);

export default UseCases;