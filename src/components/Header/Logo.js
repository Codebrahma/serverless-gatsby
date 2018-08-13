import React from 'react'
import Link from 'gatsby-link'

import { Logo } from 'serverless-design-system/src'
import logo from 'src/assets/images/logo.svg'

const LogoComponent = () => (
  <Link to='/'>
    <Logo
      src={logo}
      height={['22px', '22px', '22px', '30px']}
      width={['125px', '125px', '125px', '170px']}
      alt='Serverless'
    />
  </Link>
)

export default LogoComponent