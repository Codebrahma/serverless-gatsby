import React from 'react';

import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import HeroWrapper from '../../../components/Fragments/Common/HeroWrapper';
import HeroActions from '../../../components/Fragments/Common/HeroAction';
import GatewayPageHeroSectionBackground from '../../../assets/images/gateway.png';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${GatewayPageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <Header />
    <HeroImage />
    <Advantage />
    <HeroActions
      firstBtn={{ name: 'sign up', to: 'https://dashboard.serverless.com/', crossDomain: true, completed: false }}
      secondBtn={{ name: 'contact sales', to: '/enterprise/', completed: false }}
    />
  </HeroWrapper>
);
