import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, description }) => (
  <Helmet
    title={title}
    meta={[ { name: "description", content: description } ]}
  />
)
