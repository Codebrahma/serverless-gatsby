import React from 'react'
import { Image } from 'serverless-design-system/src'

export default ({ heroImage }) => (
  heroImage && (
    <Image
      src={heroImage}
      width={1}
      maxHeight={500}
    />
  )
)
