import React from 'react';

import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import Actions from './Actions';
import HeroWrapper from '../../../components/Fragments/Common/HeroWrapper';
import DashboardPageHeroSectionBackground from '../../../assets/images/dashboard.png';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${DashboardPageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <Header />
    <Actions />
    <HeroImage />
    <Advantage />
  </HeroWrapper>
);
