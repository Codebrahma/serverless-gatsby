import React from 'react';

import HeroWrapper from 'src/fragments/HeroWrapper';
import FrameworkPageHeroSectionBackground from 'src/assets/images/framework.png';
import Header from './Header';
import HeroImage from './HeroImage';
import Actions from './Actions';
import Advantage from './Advantage';
import CloudProviders from './CloudProviders';

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
