import React from 'react';

import DefaultLayout from 'src/layouts/Default';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';

import { ImageContext } from '../../components/ImageContextHOC';

const Dashboard = ({ data }) => (
  <ImageContext.Provider value={{...data}}>
    <DefaultLayout
      prefooter={Prefooter}
      transparentHeader
    >
      <Hero />
      <UseCase />
      <Features/>
    </DefaultLayout>
  </ImageContext.Provider>
);

export default Dashboard;

export const query = graphql`
query DashboardImgQuery {
  dashboardIcon: imageSharp(id: { regex: "/icon-platform-dash/" }) {
    resolutions(width: 86) {
      ...GatsbyImageSharpResolutions
    }
  }
  useCase1: imageSharp(id: { regex: "/use-case-1/" }) {
    sizes(maxWidth: 360) {
      ...GatsbyImageSharpSizes
    }
  }
  useCase2: imageSharp(id: { regex: "/use-case-2/" }) {
    sizes(maxWidth: 360) {
      ...GatsbyImageSharpSizes
    }
  }
  useCase3: imageSharp(id: { regex: "/use-case-3/" }) {
    sizes(maxWidth: 360) {
      ...GatsbyImageSharpSizes
    }
  }
  dashboardIllustration: imageSharp(id: { regex: "/dashboard-illustration/" }) {
    sizes(maxWidth: 744) {
      ...GatsbyImageSharpSizes
    }
  }
  dashboardFeature1: imageSharp(id: { regex: "/dashboard-feature-1/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature2: imageSharp(id: { regex: "/dashboard-feature-2/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature3: imageSharp(id: { regex: "/dashboard-feature-3/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature4: imageSharp(id: { regex: "/dashboard-feature-4/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature5: imageSharp(id: { regex: "/dashboard-feature-5/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature6: imageSharp(id: { regex: "/dashboard-feature-6/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions
    }
  }
}
`;