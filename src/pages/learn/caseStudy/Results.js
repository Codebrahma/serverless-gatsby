import React from 'react'

import { TextWithIcon, Flex, Heading, Box, P, Image } from 'serverless-design-system/src'
import RedRectangleDots from '../../../assets/images/redRectangleDots.png'
import learnCasestudyResults from '../../../assets/images/learnCasestudyResults.png'

const Results = () => (
  <Flex.column mt={6} px={3}>
    <Flex justifyContent='center'>
      <TextWithIcon
        iconSrc={RedRectangleDots} 
        iconHeight='32px'
        iconWidth='50px'
        iconTop='10px'
        iconLeft='-10px'
      >
        <Heading.h1>The Results</Heading.h1>
      </TextWithIcon>
    </Flex>
    <Box maxWidth='800px' mx='auto' mb={400}>
      <P>Feedback from the client was uniformly positive. They exceeded their goal with over a million individual users and the site was visited from over 50 countries - it was even mentioned in a tweet from David Guetta himself! They also met their goals from a performance point of view. In fact, the performance turned out to follow the opposite pattern of what’s expected in traditional architectures - when they received more traffic, the site actually got faster.</P>
      <P>In the end the Serverless Framework, and a serverless approach in general, helped Parallax deliver an experience that would have been much much more difficult and much more expensive using a traditional application architecture.</P>
      <Image src={learnCasestudyResults} alt='learn-results' mt={3}/>
    </Box>
  </Flex.column>
)

export default Results