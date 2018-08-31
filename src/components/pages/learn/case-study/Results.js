import React from 'react'
import {
  Flex,
  P,
  Image
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'
import learnCasestudyResults from 'src/assets/images/learnCasestudyResults.png'

const Results = () => (
  <AppContainer>
    <Flex.column
      mt={[4, 4, 6]}
      mb={[300, 300, 14]}
    >
      <Flex justifyContent={['left', 'left', 'center']}>
        <TitleWithIcon>The Results</TitleWithIcon>
      </Flex>
      <Flex.center
        flexDirection="column"
        width={[1, 1, 4/6]}
        mx="auto"
      >
        <P>
          Feedback from the client was uniformly positive. They exceeded their goal with over a million individual users and the site was visited from over 50 countries - it was even mentioned in a tweet from David Guetta himself! They also met their goals from a performance point of view. In fact, the performance turned out to follow the opposite pattern of what’s expected in traditional architectures - when they received more traffic, the site actually got faster.
        </P>
        <P>
          In the end the Serverless Framework, and a serverless approach in general, helped Parallax deliver an experience that would have been much much more difficult and much more expensive using a traditional application architecture.
        </P>
        <Image src={learnCasestudyResults} alt='learn-results' mt={3}/>
      </Flex.center>
    </Flex.column>
  </AppContainer>
)

export default Results