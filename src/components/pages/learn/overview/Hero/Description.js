import React from 'react'
import {
  Column,
  Text,
} from 'serverless-design-system/src'

const LeftSection = () => (
  <Column
    width={[1, 1, 0.55]}
    pt={2}
    color='white'
  >
    <Text.p
      fontSize={[6, 6, 7, 8]}
      fontFamily="Soleil"
      lineHeight={1}
      letterSpacing={'-0.2'}
      m={0}
    >
      Why Serverless?
    </Text.p>
    <Text.p
      fontSize={[2, 2, 4]}
      fontFamily="SoleilLt"
      lineHeight={3}
      letterSpacing={0}
      mt={[3, 3, 5]}
      mb={3}
    >
      Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere.
      <br />
      <br />
      What ‘serverless’ really means is that, as a developer you don’t have to think about those servers. You just focus on code.
    </Text.p>
  </Column>
)

export default LeftSection