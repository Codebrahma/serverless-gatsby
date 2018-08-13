import React from 'react'
import { Heading } from 'serverless-design-system/src'
import NavLink from 'src/components/NavLink'

const SubMenuItem = ({ children, navProps }) => (
  <NavLink {...navProps}>
    <Heading.h6 fontSize={'1.76rem'}>{children}</Heading.h6>
  </NavLink>
)
export default SubMenuItem