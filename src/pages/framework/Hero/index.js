import React from 'react';

import Header from './Header';
import HeroImage from './HeroImage';
import Advantage from './Advantage';
import CloudProviders from './CloudProviders';
import HeroWrapper from '../../../components/Fragments/Common/HeroWrapper';
import HeroActions from '../../../components/Fragments/Common/HeroAction';
import FrameworkPageHeroSectionBackground from '../../../assets/images/framework.png';

export default () => (
  <HeroWrapper
    backgroundImage={`url(${FrameworkPageHeroSectionBackground})`}
    backgroundSize="contain"
  >
    <Header />
    <HeroImage />
    <Advantage />
    <HeroActions
      firstBtn={{ name: 'quick start', to: '/framework/docs/getting-started/', completed: false }}
      secondBtn={{ name: 'sign up', to: 'https://dashboard.serverless.com/', crossDomain: true, completed: false }}
    />
    <CloudProviders />
  </HeroWrapper>
);
