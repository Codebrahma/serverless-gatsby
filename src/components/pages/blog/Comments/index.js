import React from 'react'
import Helmet from 'react-helmet'
import { Column } from 'serverless-design-system/src'
import DisqusScript from './DisqusScript'

export default () => (
  <React.Fragment>
    <Column
      width={[1, 1, 1, 0.65]}
      px={2}
      mx="auto"
      id="disqus_thread"
    >
    </Column>
    <Helmet script={[{ type: 'text/javascript', innerHTML: DisqusScript }]} />
  </React.Fragment>
)
