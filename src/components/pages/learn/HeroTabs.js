import React from 'react'

import { Box, Card, DropDown } from 'serverless-design-system/src'
import Tabs from 'src/components/Tabs'
import selectedTabBackground from 'src/assets/images/active-marker.png'

const data = [
  { label: 'overview', value: 'overview' },
  { label: 'use cases', value: 'use-cases' },
  { label: 'comparisons', value: 'comparisons' },
  { label: 'case studies', value: 'case-studies' }
]

export default () => (
  <Box>
    <Box display={[ 'none', 'none', 'block' ]}>
      <Card
        display="inline-block"
        border={"1px solid rgba(255, 255, 255, 0.2)"}
      >
        <Tabs
          data={data}
          labelStyle={{
            color: 'white',
            fontFamily: 'serverless',
            fontSize: 1,
            lineHeight: 1,
            letterSpacing: '0.4px',
          }}
          tabContainerStyle={{
            px: 2,
            py: '16px'
          }}
          selectedTabContainerStyle={{
            background: `url(${selectedTabBackground})`,
            backgroundSize: 'cover'
          }}
          selectedValue='overview'
          onClick={console.log}
        />
      </Card>
    </Box>

    <Box display={[ 'block', 'block', 'none' ]}>
      <DropDown
        options={data}
        value='overview'
        fieldContainerProps={{ background: 'transparent' }}
        placeholderProps={{ color: 'white' }}
      />
    </Box>
  </Box>
)
