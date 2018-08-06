import React from 'react';

import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import HeroWrapper from '../../../components/HeroWrapper';
import HeroActions from '../../../components/Fragments/Common/HeroAction';
import DashboardPageHeroSectionBackground from '../../../assets/images/dashboard.png';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${DashboardPageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <Header />
    <HeroActions
      firstBtn={{ name: 'sign up', to: 'https://dashboard.serverless.com/', crossDomain: true, completed: false }}
      secondBtn={{ name: 'contact sales', to: '/enterprise/', completed: false }}
    />
    <HeroImage />
    <Advantage />
  </HeroWrapper>
);
