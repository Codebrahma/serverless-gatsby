import React from 'react'
import { ResponsiveStack, Column } from 'serverless-design-system/src'

export default ({ location, status }) => (
  <ResponsiveStack justifyContent="space-between">
    <Column>{location}</Column>
    <Column>{status}</Column>
  </ResponsiveStack>
)
