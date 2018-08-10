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
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  useCase1: imageSharp(id: { regex: "/use-case-1/" }) {
    sizes(maxWidth: 360) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  useCase2: imageSharp(id: { regex: "/use-case-2/" }) {
    sizes(maxWidth: 360) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  useCase3: imageSharp(id: { regex: "/use-case-3/" }) {
    sizes(maxWidth: 360) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  dashboardIllustration: imageSharp(id: { regex: "/dashboard-illustration/" }) {
    sizes(maxWidth: 744) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  dashboardFeature1: imageSharp(id: { regex: "/dashboard-feature-1/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  dashboardFeature2: imageSharp(id: { regex: "/dashboard-feature-2/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  dashboardFeature3: imageSharp(id: { regex: "/dashboard-feature-3/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  dashboardFeature4: imageSharp(id: { regex: "/dashboard-feature-4/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  dashboardFeature5: imageSharp(id: { regex: "/dashboard-feature-5/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  dashboardFeature6: imageSharp(id: { regex: "/dashboard-feature-6/" }) {
    resolutions(width: 128) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
}
`;