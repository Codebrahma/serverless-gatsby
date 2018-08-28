import React from 'react'
import { Box } from 'serverless-design-system/src'
import { Features } from 'src/fragments'

const ourValuesContent = [
  { header: 'Radical Candor', content: 'We have the courage to give and receive constructive feedback that challenges us to do better, but also shows that we care.' },
  { header: 'Freedom with accountability', content: 'We thrive in a state of freedom and autonomy. We own our outcomes, share the credit, and shoulder the responsibility.' },
  { header: 'Futurew minded creativity', content: 'We make forward-thinking decisions for the long-term, not based on what others are doing right now. We identify root causes instead of treating symptoms.' },
  { header: 'Integrity', content: 'We treat everyone with respect. Our team is incredibly diverse: in nationality, country of residence, and background, and we believe this diversity makes our team better. More than that, it’s necessary for our team to do the creative thinking required to be a market leader.”' },
]

const OurValues = () => (
  <Box pb={[ 300, 300, 12 ]}>
    <Features
      features={ourValuesContent}
      title="Our Values"
    />
  </Box>
)

export default OurValues