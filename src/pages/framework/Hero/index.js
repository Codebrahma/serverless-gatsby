import React from 'react';

import Header from './Header';
import HeroImage from './HeroImage';
import Actions from './Actions';
import Advantage from './Advantage';
import CloudProviders from './CloudProviders';
import HeroWrapper from '../../../components/Fragments/Common/HeroWrapper';
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
