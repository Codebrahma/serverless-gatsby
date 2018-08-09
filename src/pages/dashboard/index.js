import React from 'react';

import DefaultLayout from 'src/layouts/Default';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';

// Images can be queried from graphQL layer only from top level components
// So we should get all the images here and pass down to components
// TODO: Think of React.Context for images
const Dashboard = ({ data }) => (
  <DefaultLayout
    prefooter={Prefooter}
    transparentHeader
  >
    <Hero
      dashboardIcon={data.dashboardIcon}
      dashboardIllustration={data.dashboardIllustration}
    />
    <UseCase 
      useCase1={data.useCase1}
      useCase2={data.useCase2}
      useCase3={data.useCase3}
    />
    <Features
      dashboardFeature1={data.dashboardFeature1}
      dashboardFeature2={data.dashboardFeature2}
      dashboardFeature3={data.dashboardFeature3}
      dashboardFeature4={data.dashboardFeature4}
      dashboardFeature5={data.dashboardFeature5}
      dashboardFeature6={data.dashboardFeature6}
    />
  </DefaultLayout>
);

export default Dashboard;

export const query = graphql`
query DashboardImgQuery {
  dashboardIcon: imageSharp(id: { regex: "/icon-platform-dash/" }) {
    resolutions(width: 100) {
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
    resolutions(width: 140) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature2: imageSharp(id: { regex: "/dashboard-feature-2/" }) {
    resolutions(width: 140) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature3: imageSharp(id: { regex: "/dashboard-feature-3/" }) {
    resolutions(width: 140) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature4: imageSharp(id: { regex: "/dashboard-feature-4/" }) {
    resolutions(width: 140) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature5: imageSharp(id: { regex: "/dashboard-feature-5/" }) {
    resolutions(width: 140) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardFeature6: imageSharp(id: { regex: "/dashboard-feature-6/" }) {
    resolutions(width: 140) {
      ...GatsbyImageSharpResolutions
    }
  }
}
`;