import React from 'react';

import HeroWrapper from '../../../components/HeroWrapper';
import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import Actions from './Actions';
import CloudProviders from './CloudProviders';

import FrameworkPageHeroSectionBackground from '../../../assets/images/framework.png';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${FrameworkPageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <Header />
    <HeroImage />
    <Advantage />
    <Actions />
    <CloudProviders />
  </HeroWrapper>
);
