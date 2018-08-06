import React from 'react';
import NavLink from './NavLink';
import PropTypes from 'prop-types';
import { Flex, Button, SecondaryButton } from 'serverless-design-system/src';

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
  <Flex
    flexDirection={['column', 'column', 'row']}
    width={0.5}
    justifyContent='center'
    alignItems='center'
    mx='auto'
  >
    <NavLink to={firstLink} completed={fCompleted} crossDomain={fcrossDomain}>
      <Button mx={1} my={1} width="280px" border={0}>{fName}</Button>
    </NavLink>
    <NavLink to={secondLink} completed={sCompleted} crossDomain={scrossDomain}>
      <SecondaryButton mx={1} my={1} width="280px" border={0}>{sName}</SecondaryButton>
    </NavLink>
  </Flex>
);

HeroActions.PropTypes = {
  firstBtn: PropTypes.object.isRequired,
  secondBtn: PropTypes.object.isRequired,
}
export default HeroActions;