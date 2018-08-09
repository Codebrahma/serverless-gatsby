import React from 'react';

import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import Actions from './Actions';
import HeroWrapper from '../../../fragments/HeroWrapper';
import GatewayPageHeroSectionBackground from '../../../assets/images/gateway.png';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${GatewayPageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <Header />
    <HeroImage />
    <Advantage />
    <Actions />
  </HeroWrapper>
);
