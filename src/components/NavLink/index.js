import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styled from 'styled-components'
import dotGridBacground from 'src/assets/images/dot-grid.png'

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
        background: url(${dotGridBacground});
        background-size: cover;
        display: none;

        @media screen and (max-width: 768px) {
          background: none;
        }
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

const A = styled(({ backgroundOnHover, ...props }) => (<a {...props} />))`
  ${getLinkStyle};
`
const StyledLink = styled(({ backgroundOnHover, ...props }) => (<Link {...props} />))`
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
