import React from 'react'

import { HeroWrapper } from 'src/fragments';
import DashboardPageHeroSectionBackground from 'src/assets/images/dashboard.png';
import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import Actions from './Actions';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${DashboardPageHeroSectionBackground})`}
    backgroundSize='contain'
  >
    <Header />
    <Actions />
    <HeroImage />
    <Advantage />
  </HeroWrapper>
)
