import React from 'react'
import {
  Box,
  Heading,
  Relative,
  Row,
  Column,
  P,
  withBeforeAfter,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'

const ourValuesContent = [
  { header: 'Radical Candor', content: 'We have the courage to give and receive constructive feedback that challenges us to do better, but also shows that we care.' },
  { header: 'Freedom with accountability', content: 'We thrive in a state of freedom and autonomy. We own our outcomes, share the credit, and shoulder the responsibility.' },
  { header: 'Futurew minded creativity', content: 'We make forward-thinking decisions for the long-term, not based on what others are doing right now. We identify root causes instead of treating symptoms.' },
  { header: 'Integrity', content: 'We treat everyone with respect. Our team is incredibly diverse: in nationality, country of residence, and background, and we believe this diversity makes our team better. More than that, it’s necessary for our team to do the creative thinking required to be a market leader.”' },
]

const HeaderWithCount = withBeforeAfter(
  Heading.h3,
  `&`,
  `
    position: absolute;
    color: #fd5750;
    font-family: 'Soleil';
    font-size: 160px;
    font-size: 10rem;
    line-height: 1;
    z-index: -1;
    opacity: 0.08;
  `,
  ``,
  `position: relative;`
);

const Feature = ({
  header,
  img,
  content,
  rightAligned,
  action
}) => (
  <Column
    width={[1, 1, 0.49, 0.5]}
    pr={[0, 0, 2, rightAligned ? '15.5%' : 0]}
    pl={[0, 0, 2, rightAligned ? 0 : '15.5%' ]}
    pb={[4, 4, 5]}
    pt={[6, 6, 5]}
    style={{ counterIncrement: 'step-counter' }}
    justifyContent={action ? "space-between" : "flex-start"}
  >
    <Relative>
      <HeaderWithCount
        fontFamily="SoleilBk"
        headingImagePresence={!!img}
        beforeBoxContent={"counter(step-counter, decimal-leading-zero)"}
        beforeBoxLeft={["0", "0", "-5rem"]}
        beforeBoxTop={["-9rem", "-9rem", "-2.5rem"]}
      >
        {header}
      </HeaderWithCount>
      <P>{content}</P>
    </Relative>
    {action}
  </Column>
);


const OurValues = () => (
  <Box pb={[ 300, 300, 12 ]}>
    <AppContainer>
      <Column px={[0, 0, 0, 45]}>
        <Column mt={[0, 0, 0, 4]} alignItems="center">
          <TitleWithIcon>
            Our Values
          </TitleWithIcon>
        </Column>
        <Row flexWrap='wrap' mt={3}>
          {
            ourValuesContent.map(({ header, img, content, action }, index) => (
              <Feature
                key={header}
                header={header}
                content={content}
                action={action}
                img={img}
                rightAligned={index % 2 === 0}
              />
            ))
          }
        </Row>
      </Column>
    </AppContainer>
  </Box>
)

export default OurValues