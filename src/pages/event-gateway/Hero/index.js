import React from 'react';

import HeroWrapper from 'src/fragments/HeroWrapper';
import GatewayPageHeroSectionBackground from 'src/assets/images/gateway.png';
import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import Actions from './Actions';

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
