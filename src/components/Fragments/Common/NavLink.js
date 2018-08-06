import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
`;

const NavLink = ({ to, crossDomain, children, completed }) => {
  if (!completed) {
    return (
      <A href={crossDomain ? to : `https://serverless.com${to}`}>
        {children}
      </A>
    )
  } else {
    return (
      <StyledLink to={to}>
        {children}
      </StyledLink>
    )
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  crossDomain: PropTypes.bool,
  completed: PropTypes.bool,
};

NavLink.defaultProps = {
  crossDomain: false,
  completed: false,
};

export default NavLink;