import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  SecondaryButton,
  ResponsiveStack,
} from 'serverless-design-system/src'
import NavLink from 'src/components/NavLink'

const HeroActions = ({
  firstBtn: {
    name: fName,
    to: firstLink,
    crossDomain: fcrossDomain = false,
    completed: fCompleted = false,
  },
  secondBtn: {
    name: sName,
    to: secondLink,
    crossDomain: scrossDomain = false,
    completed: sCompleted = false,
  },
}) => (
  <ResponsiveStack.center width={[1, 1, 3 / 4]} mx='auto' my={3}>
    <NavLink to={firstLink} completed={fCompleted} crossDomain={fcrossDomain}>
      <Button mx={2} my={1} border={'2.5px solid'}>
        {fName}
      </Button>
    </NavLink>
    <NavLink to={secondLink} completed={sCompleted} crossDomain={scrossDomain}>
      <SecondaryButton mx={2} my={1} borderWidth={'2.5px'}>
        {sName}
      </SecondaryButton>
    </NavLink>
  </ResponsiveStack.center>
)

HeroActions.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions
