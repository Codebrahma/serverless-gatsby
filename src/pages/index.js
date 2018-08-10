import React from 'react'

import Testimonial from 'src/fragments/Testimonial';
import DefaultLayout from 'src/layouts/Default';

import Hero from './home/Hero';
import Benefits from './home/Benefits';
import PlatformFeatures from './home/PlatformFeatures';
import Prefooter from './home/Prefooter';
import TrustedClients from './home/TrustedClients';
import DefaultLayout from '../layouts/Default';
import { ImageContext } from '../components/ImageContextHOC';

const Home = ({ data }) => {
   return (
     <ImageContext.Provider value={{...data}}>
      <DefaultLayout
        prefooter={Prefooter}
        transparentHeader
      >
        <Hero />
        <Benefits />
        <Testimonial />
        <PlatformFeatures />
        <TrustedClients />
      </DefaultLayout>
    </ImageContext.Provider>
  );
 }

export default Home;

export const query = graphql`
query HomeImgQuery {
  featureFrameworkImage: imageSharp(id: { regex: "/illustration-1/" }) {
    sizes(maxWidth: 293, quality: 100) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  featureDashboardImage: imageSharp(id: { regex: "/illustration-2/" }) {
    sizes(maxWidth: 293, quality: 100) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  featureGatewayImage: imageSharp(id: { regex: "/illustration-3/" }) {
    sizes(maxWidth: 293, quality: 100) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }
  frameworkIcon: imageSharp(id: { regex: "/bolt/" }) {
    resolutions(width: 56, quality: 100) {
      ...GatsbyImageSharpResolutions
    }
  }
  dashboardIcon: imageSharp(id: { regex: "/icon-dashboard/" }) {
    resolutions(width: 70, quality: 100) {
      ...GatsbyImageSharpResolutions
    }
  }
  gatewayIcon: imageSharp(id: { regex: "/group-6/" }) {
    resolutions(width: 70, quality: 100) {
      ...GatsbyImageSharpResolutions
    }
  }
  autoScalingIcon: imageSharp(id: { regex: "/icon-vol/" }) {
    resolutions(width: 128, quality: 100) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  payPerExecutionIcon: imageSharp(id: { regex: "/icon-graph/" }) {
    resolutions(width: 128, quality: 100) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
  lowOverheadIcon: imageSharp(id: { regex: "/icon-dash/" }) {
    resolutions(width: 128, quality: 100) {
      ...GatsbyImageSharpResolutions_tracedSVG
    }
  }
}
`;
