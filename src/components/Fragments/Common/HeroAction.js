import React from 'react';
import NavLink from './NavLink';
import PropTypes from 'prop-types';
import { Button, SecondaryButton, ResponsiveStack } from 'serverless-design-system/src';

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
  }
}) => (
  <ResponsiveStack.center
    width={0.5}
    mx='auto'
    my={2}
  >
    <NavLink
      to={firstLink}
      completed={fCompleted}
      crossDomain={fcrossDomain}
    >
      <Button m={1}>
        {fName}
      </Button>
    </NavLink>
    <NavLink
      to={secondLink}
      completed={sCompleted}
      crossDomain={scrossDomain}
    >
      <SecondaryButton m={1}>
        {sName}
      </SecondaryButton>
    </NavLink>
  </ResponsiveStack.center>
);

HeroActions.propTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions;