import React from 'react'
import Helmet from 'react-helmet'
import { Box } from 'serverless-design-system/src'

export default () => (
  <Box>
    <style>
      {'@-ms-viewport { width: device-width; }'}
    </style>
    <Helmet
      meta={[
        { property: 'og:site_name', content: process.env.GATSBY_SITENAME },
        { name: 'twitter:site', content: `@${process.env.GATSBY_TWITTER}` },
        { name: 'google-site-verification',
          content: '5deyORP0Li8BwxR57BPSdEKNWQVkejO_pFt_prXmvgI'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
  </Box>
)
