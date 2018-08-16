import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styled from 'styled-components'
import dotGridBackground from 'src/assets/images/dot-grid.png'

const getLinkStyle = ({ backgroundOnHover }) => `
  position: relative;
  text-decoration: none;

  ${
    backgroundOnHover
      ? `
      &:before {
        content: " ";
        width: 25px;
        height: 20px;
        position: absolute;
        left: -10px;
        top: -5px;
        z-index: -1;
        background: url(${dotGridBackground});
        background-size: cover;
        display: none;
      }

      &:hover {
        &:before {
          display: inline-block;
        }
      }
    `
      : null
  }
`

const A = styled.a`
  ${getLinkStyle};
`
const StyledLink = styled(Link)`
  ${getLinkStyle};
`

const NavLink = ({
  to,
  crossDomain,
  children,
  completed,
  backgroundOnHover,
}) => {
  if (!completed) {
    return (
      <A
        href={crossDomain ? to : `https://serverless.com${to}`}
        backgroundOnHover={backgroundOnHover}
        target='_blank' // open incomplete and cross domain links in new page
      >
        {children}
      </A>
    )
  } else {
    return (
      <StyledLink to={to} backgroundOnHover={backgroundOnHover}>
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
}

NavLink.defaultProps = {
  crossDomain: false,
  completed: false,
  backgroundOnHover: false,
}

export default NavLink
