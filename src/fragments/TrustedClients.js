import React from 'react'

import { Image, ResponsiveStack } from 'serverless-design-system/src'
import eaLogo from 'src/assets/images/ea-logo.png'
import cocacolaLogo from 'src/assets/images/cocacola-logo.png'
import nordstromLogo from 'src/assets/images/nordstrom-logo.png'
import expediaLogo from 'src/assets/images/expedia-logo.png'
import reutersLogo from 'src/assets/images/reuters-logo.png'

const TrustedClientLogo = ({ src: logo, altText }) => (
  <Image
    src={logo}
    alt={altText}
    maxHeight={['41px', '41px', '41px', '60px']}
    maxWidth={['80%', '80%', '60%', '80%', '100%']}
    my={2}
  />
)

const TrustedClients = () => (
  <ResponsiveStack.verticallyCenter justifyContent='space-between' width={1}>
    <TrustedClientLogo src={eaLogo} altText='EA' />
    <TrustedClientLogo src={cocacolaLogo} altText='Coca Cola' />
    <TrustedClientLogo src={nordstromLogo} altText='Nordstrom' />
    <TrustedClientLogo src={expediaLogo} altText='Expedia' />
    <TrustedClientLogo src={reutersLogo} altText='Reuters' />
  </ResponsiveStack.verticallyCenter>
)

export default TrustedClients
