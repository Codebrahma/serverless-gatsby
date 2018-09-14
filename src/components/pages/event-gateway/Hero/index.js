import React from 'react'

import { HeroWrapper } from 'src/fragments'
import GatewayPageHeroSectionBackground from 'src/assets/images/gateway.png'
import Header from './Header'
import HeroImage from './HeroImage'
import Advantage from './Advantage'
import Actions from './Actions'

const EventGatewayHero = () => (
  <HeroWrapper
    backgroundImage={`url(${GatewayPageHeroSectionBackground})`}
    backgroundSize="cover"
    backgroundPosition="center"
  >
    <Header />
    <HeroImage />
    <Advantage />
    <Actions />
  </HeroWrapper>
)

export default EventGatewayHero