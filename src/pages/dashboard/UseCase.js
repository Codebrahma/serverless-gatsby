import React from 'react'
import PropTypes from 'prop-types';
import { Box, Container, Flex, Heading, Image, ResponsiveStack, P, GatsbyImg } from 'serverless-design-system/src'

import PickImgFromContext from '../../components/HOC/ImageContext'

// Use cases is now taken from local since it will break other UseCases in netlify
// import { UseCases } from 'src/fragments'

/* Temporary Components UseCase */
// This is a gatsby-img version of Use case. This will replace in SDS - atoms
const UseCase = ({ title, description, imgSrc, imageFirst }) => {
  const descSectionPadding = {
    [ imageFirst ? 'pl' : 'pr' ] : [ 0, 0, '55px', '110px' ]
  }

  return (
    <ResponsiveStack py={[0, 0, 4]}>
      <Flex.horizontallyCenter
        flexDirection="column"
        width={[1, 1, 5/10]}
        mb={2}
        order={imageFirst ? [2, 2, 2] : [2, 2, 1]}
        { ...descSectionPadding }
      >
        <Heading.h3 fontFamily="SoleilBk">
          {title}
        </Heading.h3>
        <P>
          {description}
        </P>
      </Flex.horizontallyCenter>
      <Flex.horizontallyCenter
        width={[1, 1, 5/10]}
        mb={2}
        order={imageFirst ? [1, 1, 1] : [1, 1, 2]}
        flexDirection='column'
      >
        <GatsbyImg
          sizes={imgSrc.sizes}
          // alt={title}
          // maxWidth={1}
          // width={[ '100%', '80%', '60%', '80%' ]}
          // my="auto"
        />
      </Flex.horizontallyCenter>
    </ResponsiveStack>
  );
}

/* Temporary Components UseCases */
const UseCases = ({ useCaseHeader, useCaseSubHeader, cases }) => {
  return (
    <Container px={2}>
      <Flex.horizontallyCenter flexDirection='column'>
        <Box mt={[5, 5, 8]}>
          <P align='center' fontSize={6} color='black' m={1}>
            {useCaseHeader}
          </P>
          <P align='center' fontSize={0}>
            {useCaseSubHeader}
          </P>
        </Box>
        {cases.map(({ title, description, imgSrc }, index) => (
          <UseCase
            key={title}
            title={title}
            description={description}
            imgSrc={imgSrc}
            imageFirst={index % 2 === 1}
          />
        ))}
      </Flex.horizontallyCenter>
    </Container>
  )
}

const cases = (useCaseImg1, useCaseImg2, useCaseImg3) => [
  {
    title: 'Onboarding new team members',
    description:
      'The Serverless Dashboard makes onboarding new team members easy, quick, and secure. Architecture visualizions help them get up to speed on your applications, sandbox accounts provide them a safe learning enviroment, and user access controls allow for a secure experience.',
    imgSrc: useCaseImg1,
  },
  {
    title: 'Operating at scale',
    description:
      'The Serverless Dashboard provides the tools you need to build, deploy, and operate Servleress applications at scale. Logging, metrics, and deep observability help you accomplish more with serverless technology.',
    imgSrc: useCaseImg2,
  },
  {
    title: 'Operate applications, not infrastructure',
    description:
      'The Serverless Dashboard provides an operations experience that is centered on applications, not on infrastrucutre. Regardless of their cloud experience, any developer will have the power to manage and operate serverless applications from development to production.',
    imgSrc: useCaseImg3,
  },
]

const UseCaseWrapper = ({ useCaseImg1, useCaseImg2, useCaseImg3}) => (
  <UseCases
    cases={cases(useCaseImg1, useCaseImg2, useCaseImg3)}
    useCaseHeader='Serverless Dashboard Use Cases'
    useCaseSubHeader='These are the 3 main use cases for the Serverless Dashboard that you should know about.'
  />
)

export default PickImgFromContext(UseCaseWrapper, ['useCaseImg1', 'useCaseImg2', 'useCaseImg3'])
