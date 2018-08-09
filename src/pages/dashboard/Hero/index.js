import React from 'react';

import { HeroWrapper } from 'src/fragments';
import DashboardPageHeroSectionBackground from 'src/assets/images/dashboard.png';
import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import Actions from './Actions';

export default ({ dashboardIllustration, dashboardIcon }) => (
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
