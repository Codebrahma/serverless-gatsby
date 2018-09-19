import React from 'react'
import { push } from 'gatsby-link'
import { Logo } from 'serverless-design-system/src'
import logo from 'src/assets/images/blog-logo.svg'

const LogoComponent = () => (
  <Logo
    src={logo}
    height={['20px', '20px', '20px', '30px']}
    width={['150px', '150px', '150px', '170px']}
    alt='Serverless Blog'
    onClick={() => push('/blog')}
  />
)

export default LogoComponent
