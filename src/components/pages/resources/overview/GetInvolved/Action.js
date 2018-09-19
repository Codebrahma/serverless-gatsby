import React from 'react'
import { Button } from 'serverless-design-system/src'
import { NavLink } from 'src/components'

const Action = ({ name, link, options = {} }) => (
  <NavLink
    to={link}
    {...options}
  >
    <Button>{name}</Button>
  </NavLink>
)

Action.defaultProps = {
  name: 'learn more',
  options: { completed: true },
}

export default Action
