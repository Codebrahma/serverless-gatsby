import React from 'react'
import { push } from 'gatsby-link'
import { Box, Card, DropDown } from 'serverless-design-system/src'

import { Tabs } from 'src/components'
import selectedTabBackground from 'src/assets/images/active-marker.png'

const onTabSelect = ({ navProps: { to, crossDomain } }) => (
  (crossDomain ? window.open : push)(to)
)

export default ({ data, selected }) => (
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
            align: 'center',
          }}
          tabContainerStyle={{
            minWidth: '120px',
            height: '46px',
            justifyContent: 'center',
            alignItems: 'center',
            m: '2px',
          }}
          selectedTabContainerStyle={{
            background: `url(${selectedTabBackground})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          selectedValue={selected}
          onTabSelect={onTabSelect}
        />
      </Card>
    </Box>

    <Box
      display={[ 'block', 'block', 'none' ]}
      maxWidth="320px"
    >
      <DropDown
        options={data}
        value={selected}
        fieldContainerProps={{
          background: `url(${selectedTabBackground})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        placeholderProps={{ color: 'white' }}
        onChange={({ value }) => (
          data.every((tabData) => {
            if (value !== tabData.value) { return true }
            onTabSelect(tabData)
          })
        )}
      />
    </Box>
  </Box>
)
