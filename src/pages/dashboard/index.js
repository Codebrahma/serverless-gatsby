import React from 'react';

import DefaultLayout from 'src/layouts/Default';
import Hero from './Hero';
import UseCase from './UseCase';
import Features from './Features';
import Prefooter from './Prefooter';


const Dashboard = ({ data }) => (
  <DefaultLayout
    prefooter={Prefooter}
    transparentHeader
  >
    <Hero />
    <UseCase 
      useCase1={data.useCase1}
      useCase2={data.useCase2}
      useCase3={data.useCase3}
    />
    <Features />
  </DefaultLayout>
);

export default Dashboard;
export const query = graphql`
query DashboardImgQuery {
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
}
`;
